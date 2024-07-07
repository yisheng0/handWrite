var maxArea = function(height) {
    let left = 0, right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const currentArea = (right - left) * Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, currentArea);

        // 移动高度较小那一端的指针
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};