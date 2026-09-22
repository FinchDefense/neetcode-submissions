class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater = 0;
        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            const newArea = Math.min(heights[left], heights[right]) * (right - left);
            if (newArea > maxWater) maxWater = newArea;

            if (heights[left] < heights[right]) {
                left++;
            }
            else {
                right--;
            }
        }

        return maxWater;
    }
}
