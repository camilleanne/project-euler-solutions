// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// brute force
let palindrome = 0;
let p1 = 0;
let p2 = 0;

for (var i = 100; i < 1000; i ++) {
	for (var j = 100; j < 1000; j ++) {
		const t = i * j;
		// this is the most expensive way to check
		if (t.toString() == t.toString().split('').reverse().join('') && t > palindrome) {
			palindrome = t;
			p1 = i;
			p2 = j;
		}
	}
}

console.log(palindrome, p1, p2)
