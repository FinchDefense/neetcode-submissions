class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let visited = new Map();
        
        for (let i=0; i<nums.length; i++) {
            let aim = target - nums[i];
            if (visited.has(aim)) {
                return [visited.get(aim), i];
            }
            
            visited.set(nums[i], i);
        }

        return [];
    }
}
