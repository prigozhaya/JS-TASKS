// Дан массив чисел. Необходимо отсортировать нечетные числа в порядке возрастания, оставив четные числа на их исходных позициях.

//O(3n)
function sortOdd(array) {
  const odd = array.filter((el) => el % 2).sort((a, b) => a - b);
  return array.map((el) => (el % 2 ? odd.shift() : el));
}

console.log(sortOdd([7, 1])); //  =>  [1, 7]
console.log(sortOdd([5, 8, 6, 3, 4])); // =>  [3, 8, 6, 5, 4]
console.log(sortOdd([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]