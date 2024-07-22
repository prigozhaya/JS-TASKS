// Реализовать функцию without.
// Первый аргумент - массив, второй и последующие - значения
// Функция возвращает новый массив, который наполнен теми значениями,
// которые не передавались как второй и последующие аргументы функции

//O(2n)
function without(array, ...rest) {
  const subtracted = rest.reduce((accum, el) => {
    accum[el] = el;
    return accum;
  }, {});

  return array.filter((el) => !subtracted[el]);
}

console.log(without([2, 1, 2, 3], 1, 2)); //-> [3]
console.log(without([2, 1, 10, 20, 5], 1, 2, 5, 5)); // -> [10, 20]
