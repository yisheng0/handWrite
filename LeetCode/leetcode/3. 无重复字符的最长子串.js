//定义一个函数，参数为字符串 s，返回值为不含重复字符的最长子串的长度
function lengthOfLongestSubstring(s) {
    let max = 0;
    let i = 0;
    let obj = {};
    for (let j = 0; j < s.length; j++) {
        let c = s[j];

        if (obj[c] !== undefined) {
            //将滑动窗口左边界更新为重复字符的下一个位置和当前左边界的较大者，以避免重复计算
            i = Math.max(i, obj[c] + 1);
        }

        obj[c] = j;
 
        max = Math.max(max, j - i + 1);
    }
    //返回最长子串的长度
    return max;
}
//定义一个函数，参数为字符串 s，返回值为不含重复字符的最长子串的长度
function lengthOfLongestSubstring(s) {
    let max = 0;
    //定义一个变量 i，用于表示滑动窗口的左边界
    let i = 0;
    //定义一个变量 j，用于表示滑动窗口的右边界
    let j = 0;
    let set = new Set();
    while (j < s.length) {

        let c = s[j];
        if (set.has(c)) {
            set.delete(s[i]);
            i++;
        } else {
            set.add(c);
            j++;
            max = Math.max(max, j - i);
        }
    }
    //返回最长子串的长度
    return max;
}
