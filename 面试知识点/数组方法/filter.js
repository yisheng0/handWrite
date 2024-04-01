Array.prototype._filter = function(fn) {
    let res = [];
    let arr = this;
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i])){
            res.push(arr[i]);
        }
    }
    return res;
};



// let fn = i=>{i>1}
// console.log(fn(1))
var fourSum = function (nums, target) {
    let res = [];
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i - 1] && i > 0) continue;
        for (let j = i + 1; j < nums.length - 1; j++) {
            if (nums[j] == nums[j - 1] && j > i + 1) continue;
            let left = j + 1, right = nums.length - 1;
            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right]
                if (sum == target) {
                    res.push([nums[i],nums[j],nums[left],nums[right]])
                    while (nums[left] == nums[left + 1] && left < right) left++;
                    while (nums[right] == nums[right - 1] && left < right) right--;
                    left++;
                    right--
                }
                if (sum > target) right--;
                if (sum < target) left++;
            }
        }
    }
    return res
}