let print = function(num,delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(num);
            resolve()
        },delay)
    })
}
let step = function(){
    Promise.resolve()
    .then(()=>print(1,1000)) 
    .then(()=>print(2,1000))
    .then(()=>print(3,1000))
}
step()