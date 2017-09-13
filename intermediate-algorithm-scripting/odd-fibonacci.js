/*

Given a positive integer num, return the 
sum of all odd Fibonacci numbers that are 
less than or equal to num.

The first two numbers in the Fibonacci 
sequence are 1 and 1. Every additional 
number in the sequence is the sum of 
the two previous numbers. The first six numbers 
of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 
because all odd Fibonacci numbers less 
than 10 are 1, 1, 3, and 5.

*/

function sumFibs(num) {

	// The first two numbers in the Fibonacci sequence are 1 and 1
	let fib = [1];
	let fibNum = 1;
	
	while (fibNum <= num) {
		
		// immediately push number
		fib.push(fibNum)
		
		// reassign fibnum
		// rule:  xn = xn-1 + xn-2
		let length = fib.length;
		fibNum = fib[length - 1] + fib[length - 2];
	}

	// return odd numbers
	let oddfib = fib.filter(num => num % 2 !== 0).reduce((a,b) => a + b);

	return oddfib;
}

sumFibs(1); // should return a number.
sumFibs(1000); // should return 1785.
sumFibs(4000000); //  should return 4613732.
sumFibs(4); //  should return 5.
sumFibs(75024); //  should return 60696.
sumFibs(75025); //  should return 135721.






