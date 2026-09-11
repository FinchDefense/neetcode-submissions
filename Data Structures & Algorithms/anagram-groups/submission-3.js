class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};

        for (const word of strs) {
            const sortedWord = word.split('').sort().join('');
            if (!(sortedWord in groups)) {
                groups[sortedWord] = [];
            }

            groups[sortedWord].push(word);
        }

        return (Object.values(groups));
    }
}