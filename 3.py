# The prime factors of 13195 are 5, 7, 13 and 29.

# What is the largest prime factor of the number 600851475143 ?

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
