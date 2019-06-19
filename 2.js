let a = 1;
let b = 2;
let c = 0;

let sum = 2;
while (a + b < 4000000) {
	c = a + b;
	a = b;
	b = c;
	if (c % 2) sum += c;
}

console.log(sum)