class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let reversedStr = cleanStr.split('').reverse().join('');

        return cleanStr === reversedStr;
    }
}
