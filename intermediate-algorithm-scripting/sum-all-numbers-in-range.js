/*

We'll pass you an array of two numbers. 
Return the sum of those two numbers 
and all numbers between them.

The lowest number will not always come first.

*/


function sumAll(arr) {
  let total = 0;
  let sorted = arr.sort((a,b) =>  a - b);
  
  for (let i = sorted[0]; i <= sorted[1]; i++) {
  	total += i;
  }

  return total;
}


sumAll([1, 4]); //  10
sumAll([4, 1]); //  10
sumAll([5, 10]); //  45
sumAll([10, 5]); //  45

