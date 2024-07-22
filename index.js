const factory = (xValue, yValue, funcSumName) => {
  return {
    x: xValue,
    y: yValue,
    [funcSumName]() {
      return this.x + this.y;
    },
  };
};

const obj = factory(12, 23, "myFunc");
console.log(obj.x, obj.y, obj.myFunc()); // 12, 23, 35
