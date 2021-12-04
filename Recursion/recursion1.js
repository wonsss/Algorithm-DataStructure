function countDown(num) {
  if (num <= 0) {
    // 1. Base Case
    console.log('All done!');
    return;
  }
  console.log(num);
  num--; // 2. 매번 다른 값 입력
  countDown(num);
}

countDown(5);
