// Longest Consecutive Subsequence
// Given an array of integers, find the length of the longest sub-sequence such that elements in the subsequence are consecutive integers, the consecutive numbers can be in any order.
// Examples

// Input: arr[] = {1, 9, 3, 10, 4, 20, 2};
// Output: 4
// The subsequence 1, 3, 4, 2 is the longest subsequence
// of consecutive elements

// Input: arr[] = {36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42}
// Output: 5
// The subsequence 36, 35, 33, 34, 32 is the longest subsequence
// of consecutive elements. 

const input = [36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42]

let set = new Set(input)

let cTop = 1;
let cCur = 1;

for (let i = 0; i < input.length; i ++) {
	if (cCur > cTop) cTop = cCur;
	let current = input[i];
	current ++;
	cCur = 1;
	while (set.has(current)) {
		current ++
		cCur ++
	}	
}

console.log(cTop)