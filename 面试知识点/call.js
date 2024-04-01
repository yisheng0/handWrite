let a = function(x,y) {
    console.log(this)
    return x+y;
  }
  Function.prototype.a = function() {
    console.log(this)
    console.log(this(...arguments))
  }
  a.a(1,9)