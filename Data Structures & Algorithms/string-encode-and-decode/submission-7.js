class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const lengths = [];
        for (const str of strs) {
            lengths.push(String(str.length));
        }

        return lengths.join(',') + '|' + strs.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // 1. Find the pipe boundary using string indexOf
        const indexOfPipe = str.indexOf('|');
        
        // 2. Separate metadata and text content as clean strings
        const lengthsStr = str.slice(0, indexOfPipe);
        const concatStr = str.slice(indexOfPipe + 1);
        
        // 3. Split the metadata string by commas to get clean lengths
        // If lengthsStr is empty (e.g. input was empty array), split(',') returns ['']
        const lengths = lengthsStr === "" ? [] : lengthsStr.split(',');
        const result = [];

        // 4. Use 'let' so curIndex can be updated
        let curIndex = 0; 
        for (const length of lengths) {
            const numLength = Number(length);
            
            // 5. Slice directly from the text content string
            const word = concatStr.slice(curIndex, curIndex + numLength);
            result.push(word);
            
            curIndex += numLength;
        }

        return result;
    }
}
