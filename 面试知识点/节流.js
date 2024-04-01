//节流函数  滚动
function throttle(func, delay) {
    let lastTime = 0;
    //返回一个包装后的函数
    return function() {
      let nowTime = Date.now();
      if (nowTime - lastTime > delay) {
        func.apply(this, arguments);
        lastTime = nowTime;
      }
    }
  }