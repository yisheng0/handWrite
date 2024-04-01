var moveZeroes = function (nums) {
    let zeroIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[zeroIndex], nums[i]] = [nums[i], nums[zeroIndex]];
            zeroIndex++; 
        }
    }
};