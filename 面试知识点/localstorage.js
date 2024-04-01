class StorageManager {
    constructor() {
      this.storageKey = 'myAppStorage';
      this.storageTTL = 1000 * 60 * 60; // 默认1小时后清除数据
    }
  
    setStorage(key, value, ttl = this.storageTTL) {
      const item = {
        value: value,
        expiry: Date.now() + ttl,
      };
      const storage = this.getStorage();
      storage[key] = item;
      localStorage.setItem(this.storageKey, JSON.stringify(storage));
      this.scheduleClear();
    }
  
    getStorage() {
      const rawStorage = localStorage.getItem(this.storageKey);
      return rawStorage ? JSON.parse(rawStorage) : {};
    }
  
    getStoredValue(key) {
      const storage = this.getStorage();
      const item = storage[key];
      if (!item) {
        return null;
      }
  
      const { expiry, value } = item;
      if (Date.now() > expiry) {
        // 清除过期的数据
        this.remove(key);
        return null;
      }
  
      return value;
    }
  
    remove(key) {
      const storage = this.getStorage();
      delete storage[key];
      localStorage.setItem(this.storageKey, JSON.stringify(storage));
    }
  
    scheduleClear() {
      const clearInterval = setInterval(() => {
        const storage = this.getStorage();
        Object.keys(storage).forEach((key) => {
          const { expiry } = storage[key];
          if (Date.now() > expiry) {
            delete storage[key];
          }
        });
        localStorage.setItem(this.storageKey, JSON.stringify(storage));
      }, 1000); // 每秒检查一次
    }
  }
  
  // 使用示例
  const storageManager = new StorageManager();
  
  // 存储数据
  storageManager.setStorage('myKey', 'myValue', 1000 * 60 * 60 * 24); // 设置24小时后过期
  
  // 检索数据
  const value = storageManager.getStoredValue('myKey');
  console.log(value); // 输出: myValue
  
  // 定时清除功能已经内置在setStorage方法中，当数据过期时，会自动清除