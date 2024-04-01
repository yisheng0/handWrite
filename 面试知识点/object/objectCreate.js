function _objectCreate(protoObj){
    if(protoObj === undefined && typeof(protoObj) !== 'object') return;
    let obj = new Object();
    Object.setPrototypeOf(obj, protoObj);
    return obj;
}