function  huwen(x){
    let str = x.toString();
    let arr = str.split('');
    let len = Math.floor(arr.length/2);
    let bool = true;
    for (let i=0; i<len; i++){
        if(arr[i] !== arr[arr.length-1-i]){
             bool = false;
            break;
    }                                 
}
return bool;
}
let x = 123331;
 console.log(huwen(x));
