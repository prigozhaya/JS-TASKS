// Вернуть средний символ слова. Если длина слова нечетная, вернуть средний символ. Если длина слова четная, вернуть 2 средних символа.

//O(1)
function getMiddle(word) {
  return word.slice(
    Math.ceil(word.length / 2) - 1,
    Math.floor(word.length / 2) + 1
  );
}

console.log(getMiddle("test")); // should return "es"
console.log(getMiddle("testing")); // should return "t"
console.log(getMiddle("middle")); // should return "dd"
console.log(getMiddle("A")); // should return "A"