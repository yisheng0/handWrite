let promiseRace = (arr)=>{
   return new Promise((resolve,reject)=>{
      for(let i=0;i<arr.length;i++){
         arr[i].then(res=>resolve(res),err=>reject(err))
      }
   })
}

let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(1)
    }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(2)
    }, 200)
})
let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(3)
    }, 3000)
})

promiseRace([p1,p2,p3]).then(res=>{
   console.log(res)
})