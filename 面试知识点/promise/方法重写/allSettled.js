let allSettled = (promises) => {
  return new Promise((resolve, reject) => {
    let results = [];
    let count = 0;
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        (value) => {
          results[i] = { status: "fulfilled", value };
          count++;
          if (count === promises.length) {
            resolve(results);
          }
        },
        (reason) => {
          results[i] = { status: "rejected", reason };
          count++;
          if (count === promises.length) {
            resolve(results);
          }
        }
      );
    }
  });
};
let p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 1000);
});
let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(2);
  }, 200);
});
let p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(3);
  }, 3000);
});
allSettled([p1, p2, p3]).then(function (results) {
  console.log(results);
});
