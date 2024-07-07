function isPalindrome(s) {
    let old = ''
    let  n = ''
    let t = [];
    // 遍历原始字符串 s
    for (let c of s) {
        // 如果 c 是字母或数字，那么将其转换为小写并加到 t 的末尾
        if (c.match(/[a-zA-Z0-9]/)) {
            t.unshift(c.toLowerCase()) ;
            old += c.toLowerCase()
        }
    }
    for(let i=0; i<t.length;i++) {
        n += t[i]
    }
    if(old == n ){
       return true; 
    }else{
        return false
    }
    
}
let s = "A man, a plan, a canal: Panama"
console.log( isPalindrome(s) )  
//双指针  头尾