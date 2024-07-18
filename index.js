// Функция принимает 2 массива.
// Возвращает новый массив, который состоит только из тех элементов,
// которые встретились в одном массиве, но не встретились в другом

// console.log(arrayDiff([1, 2, 3], [1, 2, 4])); -> [3, 4]
// console.log(arrayDiff([1, 3, 3, 4], [1, 3, '4'])); -> [4, '4']


function arrayDiff(array1, array2) {
  const arr1 = array1.filter((el) => !array2.includes(el));
  const arr2 = array2.filter((el) => !array1.includes(el));

  return arr1.concat(arr2);
}


console.log(arrayDiff([1, 2, 3], [1, 2, 4])); //-> [3, 4]
console.log(arrayDiff([1, 3, 3, 4], [1, 3, "4"])); // -> [4, '4']
console.log(arrayDiff([1, 3, 3, 4, 5], [1, 3, 3, 3, "4"])); // -> [4, 5,'4']