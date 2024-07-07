let _typeof = (a) => {
  if (a === null) return "null";
  if (a === undefined) return "undefined";
  if (a === true || a === false) return "boolean";
  if (typeof a === "number") return "number";
  if (typeof a === "string") return "string";
  if(Object.prototype.toString.call(a) === '[object Function]') return "function";
  if (typeof a === "object") {
    if (Array.isArray(a)) return "array";
    if (a.constructor === Object) return "object";
  }
};
let fn = ()=>{}
let res = Object.prototype.toString.call("111")
console.log(res)