// Написать ф-ию, которая принимает 3 целочисленных значения a, b, c. Ф-ия должна возвращать true, если треугольник можно построить со сторонами заданной длины, и false в любом другом случае.
// Примеры:
// isTriangle(1,2,2)	// true
// isTriangle(7,2,2)	// false

// O(1)
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

console.log(isTriangle(1, 2, 2)); // true
console.log(isTriangle(7, 2, 2)); // false
