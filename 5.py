# 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

# What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

# --

# this answer is 10x slower in python than js
# whyyyyy??

scope = 20
i = scope

ok = False

while True:
  i += scope

  for j in range(1, scope):
    ok = False
    if i % j > 0:
      break
    ok = True

  if ok == True:
    break

print i
