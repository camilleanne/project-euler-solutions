a = 1;
b = 2;
c = 0;

sum = 2;

while a + b < 4000000:
	c = a + b
	a = b
	b = c
	if c % 2:
		sum += c

print sum