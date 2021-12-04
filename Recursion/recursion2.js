// 재귀를 이용한 sum 함수
function sumRange(num) {
  if (num === 1) return 1; // Base Case
  return num + sumRange(num - 1); // 다른 input
}

sumRange(3); // 4

// return 3 + sumRange(2);
// return 2 + sumRange(1);
// return 1;

// 재귀를 이용한 팩토리얼 함수
function factorial(num) {
  if (num === 1) return 1; // Base Case
  return num * factorial(num - 1); // 다른 input
}

factorial(4);
