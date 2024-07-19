// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

//O(1)
function sumTo(n) {
  const last = 1 + (n - 1); // formula for the sum of the first n numbers of an arithmetic progression in increments of 1
  return ((1 + last) / 2) * n;
}

//O(n)
function sumTo(n) {
  [currValue, sum] = [0, 0];

  while (currValue <= n) {
    sum += currValue;
    currValue++;
  }

  return sum;
}

console.log(sumTo(5));
console.log(sumTo(1));
console.log(sumTo(2));
