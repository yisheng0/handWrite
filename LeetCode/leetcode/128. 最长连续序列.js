var longestConsecutive = function(nums) {
    let map = new Map(), 
        maxCount = 0;
  
    // 将数组转换为Set，去除重复元素并提高搜索效率
    nums.forEach(num => map.set(num, true));
  
    for (let value of nums) {
      if (map.get(value - 1)) continue; 
  
      let curr = value;
      while (map.get(curr + 1)) { 
        map.delete(curr + 1); 
        curr++;
      }
      maxCount = Math.max(maxCount, curr - value + 1);
    }
  
    return maxCount;
  };