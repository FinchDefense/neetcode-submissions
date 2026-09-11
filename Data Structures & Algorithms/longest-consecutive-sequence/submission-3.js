class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        const set = new Set(nums);
        let maxStreak = 0;

        for (const num of set) {
            if (set.has(num-1)) {
                continue;
            }

            let currentNum = num;
            let currentStreak = 1;

            while (set.has(num + currentStreak)) {
                currentStreak++;
            }

            if (currentStreak > maxStreak) maxStreak = currentStreak;
        }

        return maxStreak;
    }
}
