let prime = 600851475143
let factors = []

let f = 2;

while (true) {
	if (prime >= f * f) {
		if (prime % f == 0) {
			prime = prime / f
			factors.push(f)
		} else {
			f ++
		}
	} else {
		factors.push(prime)
		break
	}
}

console.log(factors.pop())
