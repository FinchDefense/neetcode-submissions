class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {};
        for (const num of nums) {
            if (!(num in obj)) {
                obj[num] = 1;
            }
            else {
                obj[num]++;
            }
        }
        
        const buckets = new Array(nums.length + 1);
        for (const [num, freq] of Object.entries(obj)) {
            if (!buckets[freq]) {
                buckets[freq] = [];
            }

            buckets[freq].push(Number(num)); 
        }

        const result = [];
        for (let i = buckets.length - 1; i >= 0; i--) {
            // Check if the bucket has an array before looping over it
            if (buckets[i]) {
                for (const num of buckets[i]) {
                    result.push(num);
                    
                    if (result.length === k) {
                        return result;
                    }
                }
            }
        }

        return result;
    }
}
