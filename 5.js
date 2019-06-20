// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// --

// there's a way to do this with prime factorials
// ... let's learn prime factorials better

const range = 20;
let i = range;

let ok = false;

while (true) {
  i += range;
  for (var j = 1; j < range + 1; j++) {
    ok = false;
    // if the number divides evenly, try the next
    // if it doesn't, stop the loop
    if (i % j > 0) break;
    ok = true;
  }

  if (ok) break;
}

console.log(i)
