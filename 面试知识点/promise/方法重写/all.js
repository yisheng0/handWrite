let promiseAll = (arr) => {
  let result = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].then(
        (res) => {
          result[i] = res;
          count++;
          if (count === arr.length) {
            resolve(result);
          }
        },
        (err) => {
          reject(err);
        }
      );
    }
  });
};

// test
let p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 1000);
});
let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(2);
  }, 2000);
});
let p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(3);
  }, 4000);
});
promiseAll([p1, p2, p3]).then((res) => {
  console.log(res); // [3, 1, 2]
});
