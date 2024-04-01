function _new(fn, ...args) {
    let obj = new Object();
    Object.setPrototypeOf(obj, fn.prototype);
    let res = fn.call(obj, ...args);
    return typeof res === 'object' ? res : obj;
}