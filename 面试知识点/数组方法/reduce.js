Array.prototype._reduce = function (fn, n) {
    let sum = n ? n : 0;
    this.forEach(i => {
        sum = fn(sum, i)
    });
    return sum
}