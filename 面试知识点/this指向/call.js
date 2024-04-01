Function.prototype._call = function(context ,...args){
    context = context || window;
    let key = Symbol('key')
    context[key] = this;
    let res = context[key](...args)
    delete context[key]
    if(res) return res
}