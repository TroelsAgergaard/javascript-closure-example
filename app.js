const counter = (() => {
  let count = 10;
  console.log("counter scope count value: " + count);
  return {
    currentCount: count,
    setCount: (value) => {
      count = value;
    },
    getCount: () => {
      return count;
    },
  };
})();

counter.setCount(7);
//closure
console.log(counter.currentCount);
console.log(counter.getCount());
