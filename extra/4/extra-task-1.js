function Extra1(array) {
    let max = array[0];
    let sum = array[0];
  
    for (let i = 1; i < array.length; i++) {
      sum = Math.max(sum + array[i], array[i]);
      max = Math.max(max, sum);
    }
  
    return max;
  }
  
  console.log(Extra1([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
  console.log(Extra1([1])); // 1
  console.log(Extra1([-1])); // -1
  console.log(Extra1([5, 4, -1, 7, 8])); // 23  