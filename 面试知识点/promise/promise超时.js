function timeoutPromise(promise,time){
    let timePromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('已超时')
        },time)
    })
    return Promise.race([promise,timePromise])
}
let fn = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('ok')
    },1000)
})

timeoutPromise(fn,500).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})