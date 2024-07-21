// Написать функцию, которая будет возвращать количество отдельных нечувствительных к регистру буквенных символов и числовых цифр, которые встречаются во входной строке более одного раза. Предполагается, что входная строка содержит только буквы (как в верхнем, так и в нижнем регистре) и цифры.

//O(3n)
function getNumberOfDuplicates(str) {
  return str
    .toLowerCase()
    .split("")
    .reduce(
      (acc, curr) => {
        acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
        if (acc[curr] === 2) acc.duplicatesCount++;
        return acc;
      },
      { duplicatesCount: 0 }
    ).duplicatesCount;
}

console.log(getNumberOfDuplicates("abcde")); //-> 0 # no characters repeats more than once
console.log(getNumberOfDuplicates("aabbcde")); // -> 2 # 'a' and 'b'
console.log(getNumberOfDuplicates("aabBcde")); // -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
console.log(getNumberOfDuplicates("indivisibility")); // -> 1 # 'i' occurs six times
console.log(getNumberOfDuplicates("Indivisibilities")); // -> 2 # 'i' occurs seven times and 's' occurs twice
console.log(getNumberOfDuplicates("aA11")); // -> 2 # 'a' and '1'
console.log(getNumberOfDuplicates("ABBA")); // -> 2 # 'A' and 'B' each occur twice
