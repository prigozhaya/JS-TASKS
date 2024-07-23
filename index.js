// Функция принимает 2 массива.
// Возвращает новый массив, который состоит только из тех элементов,
// которые встретились в одном массиве, но не встретились в другом

//O(2n^2)
function arrayDiff(array1, array2) {
  return array1
    .filter((el) => !array2.includes(el))
    .concat(array2.filter((el) => !array1.includes(el)));
}

//O(4n)
function arrayDiff(array1, array2) {
  const set1 = new Set(array1);
  const set2 = new Set(array2);

  return array1
    .filter((el) => !set2.has(el))
    .concat(array2.filter((el) => !set1.has(el)));
}

console.log(arrayDiff([1, 2, 3], [1, 2, 4])); //-> [3, 4]
console.log(arrayDiff([1, 3, 3, 4], [1, 3, "4"])); // -> [4, '4']
console.log(arrayDiff([1, 3, 3, 4, 5], [1, 3, 3, 3, "4"])); // -> [4, 5,'4']