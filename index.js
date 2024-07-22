// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
// Например:
// let strings = [‘aaa’, ‘aaa’, ‘zzz’, ‘xxx’, ‘aaa’, ‘bbb’, ‘aaa’,  ‘xxx’, ‘ccc’];
// alert( unique(strings) ); // [‘aaa’, ‘zzz’, ‘xxx’, ‘bbb’, ‘ccc’]

//O(2n)
function unique(arr) {
  return [...new Set(arr)];
}

//O(n)
function unique(arr) {
  const map = {};

  return arr.filter((el) => {
    const mapEl = map[el]
    return mapEl ? !mapEl : map[el] = el;
  });
}

let strings = ["aaa", "aaa", "zzz", "xxx", "aaa", "bbb", "aaa", "xxx", "ccc"];
console.log(unique(strings)); // ["aaa", "zzz", "xxx", "bbb", "ccc"]
