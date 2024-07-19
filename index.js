// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

//O(n)
function camelize(str) {
  return str.replace(/-./g, (_, p1, offset) =>
    offset[p1 + 1].toUpperCase()
  );
}

console.log(camelize("background-color")); //== 'backgroundColor';
console.log(camelize("list-style-image")); //== 'listStyleImage';
console.log(camelize("-webkit-transition")); // == 'WebkitTransition';
