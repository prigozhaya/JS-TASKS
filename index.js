// Дана строка. Вернуть длину самого короткого слова
// Пример:
// getLengthOfShortestWord(‘Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.’) 	// => 2

//O(2n)
function getLengthOfShortestWord(str) {
  return str
    .split(" ")
    .reduce((acc, curr) => (acc = curr.length < acc.length ? curr : acc))
    .length;
}

//O(3n)
function getLengthOfShortestWord(str) {
  return Math.min(...str.split(" ").map((word) => word.length));
}
console.log(getLengthOfShortestWord("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")) 	// => 2
console.log(getLengthOfShortestWord("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt labore dolore magna aliqua.")) 	// => 3
