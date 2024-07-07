function isAnagram(s,t){
    if (s.length!=t.length){return false;} else{
        let map = {}
    for(let c of s){
        if(map[c]){
            map[c]++
        }else{
            map[c] = 1
        }
    }
    for(let c of t){
        if(map[c]){
            map[c]--
        }else{
            return false
        }
    }
    for (let i =0 ; i <s.length; i++){
        if(map[s[i]]!==0){
            return false
        }
    }
    return true 
    }
   
}
s = "anagram", t = "nagaram"
console.log(isAnagram(s,t))