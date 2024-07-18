// Реализовать функцию indexOfAll.
// Первый аргумент - массив, второй - значение

// Функция возвращает массив со всеми индексами, которые соответствуют переданному значению

// console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1)); -> [0, 3]
// console.log(indexOfAll([1, 2, 3], 4)); -> []


// O(n)
function indexOfAll(array, value) {
  return array.reduce((acc, curr, currIndex) => {
    if (curr === value) {
      acc.push(currIndex);
    }
    return acc;
  }, []);
}

console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1)); // -> [0, 3]
console.log(indexOfAll([1, 2, 3], 4)); // -> []