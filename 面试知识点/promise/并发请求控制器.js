class ConcurrencyLimiter {
  constructor(max) {
      this.max = max;
      this.pending = 0;
      this.stack = [];
  }

  add(promise) {
      this.stack.push(promise);
  }

  start() {
      for (let i = 0; i < this.max; i++) {
          this.runNext();
      }
  }

  runNext() {
      if (this.stack.length > 0 && this.pending < this.max) {
          const nextPromise = this.stack.shift();
          this.pending++;
          nextPromise().then(() => {
              this.pending--;
              this.runNext();
          });
      }
  }
}

let curr = new ConcurrencyLimiter(2);

function createTimer(delay, value) {
  return new Promise((resolve) => {
      setTimeout(() => {
          console.log(value);
          resolve();
      }, delay);
  });
}

let timer = () => createTimer(1000, 1);
let timer1 = () => createTimer(4000, 4);
let timer2 = () => createTimer(2000, 2);
let timer3 = () => createTimer(3000, 3);

curr.add(timer);
curr.add(timer1);
curr.add(timer2);
curr.add(timer3);

// curr.add(createTimer(1000, 1));
// curr.add(createTimer(4000, 1));
// curr.add(createTimer(2000, 1));
// curr.add(createTimer(3000, 1));


curr.start();
