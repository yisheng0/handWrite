function _instanceof(obj, fn) {  
    let proto = Object.getPrototypeOf(obj);  
    // if (proto === null) return false;  
    while (proto !== null) {  
        if (proto === fn.prototype) {  
            return true;  
        }  
        proto = Object.getPrototypeOf(proto);  
    }  
    return false;  
}
let res = _instanceof("111",Array)
console.log(res)