function bubbleSort(arr) {  
    for (let i = 0; i < arr.length-1; i++) {  
        for (let j = 0; j < arr.length - 1 - i; j++) {  
            if (arr[j] > arr[j + 1]) {  
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }  
        }  
    }  
    return arr;  
}  
  
// 示例  
let array = [64, 34, 25, 12, 22, 11, 90];  
console.log(bubbleSort(array));  // 输出: [11, 12, 22, 25, 34, 64, 90]