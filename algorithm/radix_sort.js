function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums); // 4
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]); // nums 배열의 i번째 수를 그 숫자의 k번째(1의 자리는 0부터) 자릿수의 순서에 있는 그릇에 넣는다.
    }
    nums = [].concat(...digitBuckets); // concat 메서드와 spread 연산자를 사용하여 한 배열 안에 있는 여러 배열들을 하나의 배열로 합친다.
  }
  return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
// [ 12, 23, 345, 2345, 5467, 9852 ]
