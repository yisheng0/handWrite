Array.prototype._reduce=function(fn){
    let sum=0;
    this.map(i=>{
        sum=fn(sum,i)
    });
    return sum
}

let a = [1,2,3]
let b = a._reduce( function(sum,i,j){
    return sum+i
})
console.log(b)