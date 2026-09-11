class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let i=0; i<nums.length; i++) {
            let aim = target - nums[i];
            let index = nums.indexOf(aim, i+1);
            if (index !== -1) {
                return [i, index];
            }
        }
    }
}
