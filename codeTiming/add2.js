function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

console.time('test');
console.log(addUpTo(10000000000));
console.timeEnd('test');
