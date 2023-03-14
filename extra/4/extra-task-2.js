function Extra2(prices) {
    let profit = 0;
    let buyPrice = prices[0];
  
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] > buyPrice) {
        profit += prices[i] - buyPrice;
        buyPrice = prices[i];
      } else if (prices[i] < buyPrice) {
        buyPrice = prices[i];
      }
    }
  
    return profit;
  }
  
  console.log(Extra2([7, 1, 5, 3, 6, 4])); // 7
  console.log(Extra2([1, 2, 3, 4, 5])); // 4
  console.log(Extra2([7, 6, 4, 3, 1])); // 0  