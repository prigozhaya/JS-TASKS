// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.


//O(n)
function filterRange(arr, bottomLine, topLine) {
  return arr.filter((el) => el >= bottomLine && el <= topLine);
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1
