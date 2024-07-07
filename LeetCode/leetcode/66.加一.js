// var plusOne = function(digits) {
//     if (digits.length === 0) {
//       return [];
//     };
//     // 检查数组是否只包含非负整数
//     for (let digit of digits) {
//       if (typeof digit !== "number" || digit < 0 || digit % 1 !== 0) {
//         return [];
//       }
//     }
//     // 把数组里的数变成一个字符串
//     let numStr = digits.join("");
//     console.log(numStr)
//     // 把字符串转换成数字，并在该数上加一
//     let num = Number(numStr) + 1;
//     console.log(num)
//     // 把数字转换回字符串，并分割成字符数组
//     let newNumStr = num.toString();
//     let newNumArr = newNumStr.split("");
//     // console.log(newNumArr)
//     // 把字符数组转换成数字数组，并返回结果
//     let result = newNumArr.map(x => Number(x));
//     return result;
//   };
//   let num = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
//   let result =   plusOne(num)
//   console.log(result)
// 定义一个函数，接受一个整数数组作为参数
function plusOne(digits) {
    // 从数组的最后一位开始遍历
    for (let i = digits.length - 1; i >= 0; i--) {
      // 如果当前位小于9，直接加一并返回结果
      if (digits[i] < 9) {
        digits[i]++;
        return digits;
      }
      // 否则，将当前位设为0，并继续循环
      else {
        digits[i] = 0;
      }
    }
    // 如果循环结束后，数组的第一位是0，说明需要进位，将1插入到数组的开头，并返回结果
    if (digits[0] === 0) {
      digits.unshift(1);
    }
    return digits;
  }