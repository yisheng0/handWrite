var canConstruct = function(ransomNote, magazine) {
    let magazineMap = {};
    
    for (let char of magazine) {
        magazineMap[char] = (magazineMap[char] || 0) + 1;
    }

    for (let char of ransomNote) {
        if (!magazineMap[char] || --magazineMap[char] < 0) {
            return false;
        }
    }

    return true;
};