prime = 600851475143
factors = []

f = 2

while (True): 
	if (prime >= pow(f, 2)):
		if (prime % f == 0):
			prime = prime / f
		else:
			f += 1
	else:
		factors.append(prime)
		break

print(factors.pop())
