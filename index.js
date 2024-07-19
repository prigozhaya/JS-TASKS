// Каррирование

function curry(f) {
  return function (a) {
    return function (b) {
      return function (c) {
        return f(a, b, c);
      };
    };
  };
}

function sum(a, b, c) {
  return a + b + c;
}

const add = curry(sum);
const plusTwo = add(2);
const plusFive = add(2)(3);

console.log(add(4)(3)(1)); // 8
console.log(plusTwo(1)(2)); //5
console.log(plusFive(1)); //6
