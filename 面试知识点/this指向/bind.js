Function.prototype._bind = function (target, ...arg1) {
  let fn = this;
  return function (...arg2) {
    return fn.call(target, ...arg1, ...arg2);
  };
};
