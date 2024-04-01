const _instanceof = (target, Fn) => {
    let proto = Object.getPrototypeOf(target);
    let prototype = Fn.prototype;
    while(true){
        if(!proto) return false ;
        if(proto === prototype) return false ;
        proto = Object.getPrototypeOf(proto)
    }
}