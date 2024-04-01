Array.prototype._map = function(fn) {
  let res = [];
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i], i, att));
  };
  return res;
};