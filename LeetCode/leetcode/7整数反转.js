// function reverse(x) {
//     // 定义一个变量 y，用来存储反转后的结果
//     let y = 0;
//     // 定义一个变量 sign，用来记录 x 的符号
//     let sign = x >= 0 ? 1 : -1;
//     // 将 x 的绝对值赋给 x
//     x = Math.abs(x);
//     // 循环反转 x 的每一位数字
//     while (x > 0) {
//         // 取出 x 的最后一位数字，加到 y 的末尾
//         y = y * 10 + x % 10;
//         // 去掉 x 的最后一位数字
//         x = Math.floor(x / 10);
//     }
//     // 将 y 乘以 sign，恢复原来的符号
//     y = y * sign;
//     // 判断 y 是否在 32 位有符号整数的范围内，如果不在就返回 0
//     if (y < -Math.pow(2, 31) || y > Math.pow(2, 31) - 1) {
//         return 0;
//     }
//     // 返回反转后的结果
//     return y;
// }
function reverse(x) {
    // 定义一个变量 y，用来存储反转后的结果
    let y = '';
    // 定义一个变量 sign，用来记录 x 的符号
    let sign = x >= 0 ? 1 : -1;
    // 将 x 的绝对值赋给 x
    x = Math.abs(x);
    // 循环反转 x 的每一位数字
    while (x > 0) {
        // 取出 x 的最后一位数字，加到 y 的末尾
        y +=  x % 10;
        // 去掉 x 的最后一位数字
        x = Math.floor(x / 10);
    }
    // 将 y 乘以 sign，恢复原来的符号
    y = Number(y) * sign;
    // 判断 y 是否在 32 位有符号整数的范围内，如果不在就返回 0
      // 判断 y 是否在 32 位有符号整数的范围内，如果不在就返回 0
      if(y > 2147483647) {
        return 0
    }
    if (y < -2147483647) {
        return 0
    }
    // 返回反转后的结果
    return y;
}
let y = reverse(129)
console.log(y)
