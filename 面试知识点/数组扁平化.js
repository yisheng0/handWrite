let  arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// 1
let res = arr4.flat(Infinity) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(res)

// 2
let res2 = arr4.join(",").split(",")
res2 = res2.map((item)=> Number(item))
console.log(res2)

//3
let deepClone = (arr) => {
    let sum = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (Array.isArray(item)) {
            sum = sum.concat(deepClone(item));
        } else {
            sum.push(item);
        }
    }
    return sum;
};


let _flat = (arr,depth) => {
    if(!Array.isArray(arr) || depth <= 0) {
        return arr;
      }
    let sum = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (Array.isArray(item)) {
            sum = sum.concat(_flat(item,depth-1));
        } else {
            sum.push(item);
        }
    }
    return sum;
};

// console.log(deepClone(arr4))
console.log(_flat(arr4,1))
