# Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

# --

scope = 100

sum_of_squares = 0
square_of_sums = 0

for i in range(scope + 1):
  sum_of_squares += (i * i)
  square_of_sums += i

square_of_sums = square_of_sums * square_of_sums

print square_of_sums - sum_of_squares
