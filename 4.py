# // let palindrome = 0;
# // let p1 = 0;
# // let p2 = 0;

# // for (var i = 100; i < 1000; i ++) {
# // 	for (var j = 100; j < 1000; j ++) {
# // 		const t = i * j;
# // 		if (t.toString() == t.toString().split('').reverse().join('') && t > palindrome) {
# // 			palindrome = t;
# // 			p1 = i;
# // 			p2 = j;
# // 		}
# // 	}
# // }

# // console.log(palindrome, p1, p2)

result = []

def palindrome(n):
	return str(n) == str(n)[::-1]

for i in range(100, 1000):
	for j in range(100, 1000):
		w = i * j
		if palindrome(w):
			result.append(w)

print max(result) 
