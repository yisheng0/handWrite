function _instanceof(obj, fn) {  
    let proto = Object.getPrototypeOf(obj);  
    if (proto === null) return false;  
    while (proto !== Object.prototype) {  
        if (proto === fn.prototype) {  
            return true;  
        }  
        proto = Object.getPrototypeOf(proto);  
    }  
    return false;  
}
