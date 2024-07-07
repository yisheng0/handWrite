//定义一个函数，参数为字符串 s 和字符串 p，返回值为 s 中所有 p 的字母异位词的起始索引的数组
function findAnagrams(s, p) {
    //定义一个结果数组，用于存储满足条件的索引
    let result = [];
    //定义一个哈希表，用于存储 p 中每个字符出现的次数
    let map = {};
    //遍历 p 的每个字符，将其出现的次数记录在哈希表中
    for (let c of p) {
        map[c] = (map[c] || 0) + 1;
    }
    //定义一个变量 count，用于记录 p 中不同字符的个数
    let count = Object.keys(map).length;
    //定义两个指针 left 和 right，用于表示滑动窗口的左右边界，初始都为 0
    let left = 0;
    let right = 0;
    //遍历 s 的每个字符
    while (right < s.length) {
        //获取当前字符
        let c = s[right];
        //如果当前字符在哈希表中，将其出现的次数减一
        if (map[c] !== undefined) {
            map[c]--;
            //如果当前字符的出现次数为 0，说明该字符已经完全匹配，将 count 减一
            if (map[c] === 0) {
                count--;
            }
        }
        //将右指针右移一位，扩大滑动窗口
        right++;
        //当 count 为 0 时，说明滑动窗口中的字符已经和 p 中的字符完全匹配，找到了一个字母异位词
        while (count === 0) {
            //将左指针对应的索引加入结果数组
            result.push(left);
            //获取左指针指向的字符
            let d = s[left];
            //如果左指针指向的字符在哈希表中，将其出现的次数加一
            if (map[d] !== undefined) {
                map[d]++;
                //如果左指针指向的字符的出现次数大于 0，说明该字符已经不匹配，将 count 加一
                if (map[d] > 0) {
                    count++;
                }
            }
            //将左指针右移一位，缩小滑动窗口
            left++;
        }
    }
    //返回结果数组
    return result;
}
