let a = {
    b:1 ,
    c:2
}
let obj = Object.assign({},a)
a.b = 2;
console.log(a)
console.log(obj)