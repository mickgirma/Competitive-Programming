var targetIndices = function(nums, target) {
    let indices = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            indices.push(i);
        }
    }

    return indices;
};
