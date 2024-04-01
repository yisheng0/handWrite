function strStr(haystack, needle) {
    if (needle === "") {
        return 0;
    }
    // 遍历 haystack
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let b = true;
        // 遍历 needle
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                b = false;
                break;
            }
        }
        if (b) {
            return i;
        }
    }
    return -1;
}

// haystack = "sadbutsad", needle = "sad"
haystack = "leetcode", needle = "leeto"
for (let i = 0; i < haystack.length; i++){
    console.log(haystack[i])
}


// function strStr(haystack, needle) {
//     // 定义一个常量 MAX，表示 32 位有符号整数的最大值
//     const MAX = Math.pow(2, 31) - 1;
//     // 判断 needle 是否为空字符串，如果是，就直接返回 0
//     if (needle === "") {
//         return 0;
//     }
//     // 判断 haystack 的长度是否小于 needle 的长度，如果是，就直接返回 -1
//     if (haystack.length < needle.length) {
//         return -1;
//     }
//     // 遍历 haystack
//     for (let i = 0; i < haystack.length; i++) {
//         // 判断 haystack[i] 是否为字母或数字，如果不是，就跳过
//         if (!/[a-zA-Z0-9]/.test(haystack[i])) {
//             continue;
//         }
//         // 定义一个变量 j，用来遍历 needle
//         let j = 0;
//         // 循环比较 haystack[i + j] 和 needle[j] 是否相等
//         while (j < needle.length && haystack[i + j] === needle[j]) {
//             // 如果相等，就将 j 加一
//             j++;
//         }
//         // 如果 j 等于 needle 的长度，说明找到了匹配项，就直接返回 i
//         if (j === needle.length) {
//             return i;
//         }
//     }
//     // 如果遍历结束没有找到匹配项，就返回 -1
//     return -1;
// }
