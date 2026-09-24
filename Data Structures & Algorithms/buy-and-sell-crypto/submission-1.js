class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;

        for (let i=0; i<prices.length; i++) {
            const p = Math.max(...prices.slice(i)) - prices[i];
            if (p > profit) profit = p;
        }

        return profit;
    }
}
