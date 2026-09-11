class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let left = new Array(nums.length);
        left[0] = 1;

        for (let i=1; i < nums.length; i++) {
            left[i] = left[i-1] * nums[i-1];
        }

        let rightProduct = 1;

        for (let j=nums.length-1; j >= 0; j--) {
            left[j] *= rightProduct;
            rightProduct *= nums[j];
        }

        return left;
    }
}
