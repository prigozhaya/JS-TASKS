// Написать функцию persistence, которая принимает положительный параметр num и возвращает число, которое нужно умножить цифры в num, пока не дойдете до единственной цифры.

// Примеры:
//  persistence(39) === 3 	// because 3*9 = 27, 2*7 = 14, 1*4=4
//                        			// and 4 has only one digit
//  persistence(999) === 4 	// because 9*9*9 = 729, 7*2*9 = 126,
//                         		// 1*2*6 = 12, and finally 1*2 = 2
//  persistence(4) === 0 		// because 4 is already a one-digit number

//O(1.3n) (12982004/10000000)
function persistence(number) {
  [count, result] = [0, number];

  while (result > 9) {
    result = `${result}`.split("").reduce((acc, curr) => (acc = acc * curr));
    count++;
  }

  return count;
}

console.log(persistence(39)); // === 3 	// because 3*9 = 27, 2*7 = 14, 1*4=4 and 4 has only one digit
console.log(persistence(999)); //=== 4 	// because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2
console.log(persistence(4)); // === 0 // because 4 is already a one-digit number
