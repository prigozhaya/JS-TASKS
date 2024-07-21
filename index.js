// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти
// Функция getMaxSubSum(arr) должна возвращать эту сумму.
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»


//O(n)
function getMaxSubSum(arr) {
  let max = 0;

  arr.reduce((acc, curr) => {
    max = Math.max(max, acc);
    acc = acc + curr < 0 ? 0 : acc + curr;
    return acc;
  }, 0);

  return max;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); //= 5 (сумма выделенных)
console.log(getMaxSubSum([2, -1, 2, 3, -9])); // = 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // = 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // = 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // = 100
console.log(getMaxSubSum([1, 2, 3])); // = 6 (берём все)