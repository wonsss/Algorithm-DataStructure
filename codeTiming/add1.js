function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.time('test');
console.log(addUpTo(10000000000));
console.timeEnd('test');
