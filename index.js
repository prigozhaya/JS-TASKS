// Создать функцию с именем divisors / Divisors, которая принимает целое число n> 1 и возвращает массив со всеми делителями целого числа (кроме 1 и самого числа), от наименьшего до наибольшего. Если число простое, вернуть строку '(integer) is prime'.

// Примеры:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

//O(n)
function divisors(number) {
  const result = [];
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      result.push(i);
    }
  }

  return result.length ? result : `${number} is prime`;
}

console.log(divisors(12)); // should return [2,3,4,6]
console.log(divisors(1535)); // should return [5,307]
console.log(divisors(13)); // should return "13 is prime"
