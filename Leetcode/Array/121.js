/**
121. Best Time to Buy and Sell Stock
/**
Say you have an array for which the ith element is the price of a 
given stock on day i.

If you were only permitted to complete at most one transaction 
(ie, buy one and sell one share of the stock), 
design an algorithm to find the maximum profit.
Example 1:
Input: [7, 1, 5, 3, 6, 4]
Output: 5

max. difference = 6-1 = 5 (not 7-1 = 6, 
as selling price needs to be larger than buying price)

Example 2:
Input: [7, 6, 4, 3, 1]
Output: 0

In this case, no transaction is done, i.e. max profit = 0.
 *//**
 * @param {number[]} prices
 * @return {number}

  if(!hashTable[indexOf(prices[i])]){
			hashTable[indexOf(prices[i])] = prices[i];
		}
 */
/**
Dinamic Programming Problem:
max = max(price) - min(price);
However, the max and min is always changing.

Key principle is to dynamically find out the min and max
1. set min = Infinity to update the min price
2. set the diff = price - min
3. set the max = Max(diff, current max) 

 */


var maxProfit = function(prices) {
  if(!prices||prices.length == 0){
  	return 0;
  }
  var min = Infinity, max = 0, diff = 0;
  for(var i = 0; i < prices.length; i++){
  		var price = prices[i];
  		if(preice < min){
  			min = price;
  		}
  		var diff = price - min;
  		if(diff > max){
  			max = diff;
  		}
  }
  return max;
};



console.log(maxProfit([2,4,1]));
//console.log(maxProfit([7, 1, 5, 3, 6, 4]));
