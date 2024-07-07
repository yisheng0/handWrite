let print = (nums)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(nums);
            resolve();
        },1000)
    })
}
Promise.resolve()
.then(()=>print(1))
.then(()=>print(2))
.then(()=>print(3))