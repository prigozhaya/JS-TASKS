// Написать функцию persistence, которая принимает положительный параметр num и возвращает число, которое нужно умножить цифры в num, пока не дойдете до единственной цифры.

//O(kn) - the coefficient depends on the number
function persistence(number) {
  let count = 0;
  let result = number;

  while (result > 9) {
    result = `${result}`.split("").reduce((acc, curr) => acc * curr);
    count++;
  }

  return count;
}

console.log(persistence(39)); // === 3 	// because 3*9 = 27, 2*7 = 14, 1*4=4 and 4 has only one digit
console.log(persistence(999)); //=== 4 	// because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2
console.log(persistence(4)); // === 0 // because 4 is already a one-digit number
