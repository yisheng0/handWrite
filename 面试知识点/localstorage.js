class StorageManager {
  storageTTL = 1000 * 60 * 60; // 默认1小时后清除数据
  timers = {}; 

  setStorage(key, value, ttl = this.storageTTL) {
    const now = new Date();
    const item = {
      value: value,
      expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
    this.Clear(key, ttl);
  }

  getStorage(key) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
      return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  }

  Clear(key, ttl) {
    if (this.timers[key]) {
      clearTimeout(this.timers[key]);
    }
    this.timers[key] = setTimeout(() => {
      localStorage.removeItem(key);
      delete this.timers[key];
    }, ttl);
  }
}
// const now = new Date();
// if (now.getTime() > item.expiry) {
//   localStorage.removeItem(key);
//   return null;
// }
//定时器由于某些原因（比如浏览器关闭了）没有执行