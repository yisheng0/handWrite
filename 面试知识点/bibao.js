function b(){
    let a = 2;
    return function(){
        a++;
        return a;
    }}
;
let c = b();
console.log(c());
console.log(c());

