// Написать функцию, которая возвращает минимальное и максимальное количество заданного списка / массива.

//O(2n)
function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)]
 };

console.log(minMax([1,2,3,4,5]))//   == [1,5]
console.log(minMax([2334454,5]))//   == [5, 2334454]
console.log(minMax([1]))// == [1, 1]