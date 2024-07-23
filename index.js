// Каррирование

function curry(f) {
  return function (operand1) {
    let resultArr = [operand1];

    function inner(operandN) {
      if (operandN) {
        resultArr.push(operandN);
        return inner;
      } else {
        return f(...resultArr);
      }
    }
    return inner;
  };
}

function sum(...rest) {
  return rest.reduce((acc, curr) => (acc += curr));
}

const add = curry(sum);
const plusTwo = add(2);
const plusFive = add(2)(3);

console.log(add(4)(3)(1)()); // 8
console.log(plusTwo(1)(2)()); //5
console.log(plusFive(1)()); //6

console.log(add(1)(2)(3)(4)(5)()); //15
console.log(add(1)(2)(3)(4)(5)(6)()); //21
