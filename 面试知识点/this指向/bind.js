Function.prototype._bind = function (target, ...arguments1) {
  let fn = this;
  return function (...args2) {
    return fn.apply(target, arguments1.concat(args2));
  };
};
