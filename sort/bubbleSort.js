function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true; // 외부 for 문 돌 때마다 이전 swap 기록 초기화
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false; // 이번 순회에서 swap했다면 false 할당
      }
    }
    console.log('one pass complete');
    console.log(noSwaps);
    if (noSwaps) break; // 지난 번 순회에서 swap하지 않았다면(true) 루프를 break;
  }
  return arr;
}

const array = [9, 1, 2, 3, 4, 5];
console.log(bubbleSort(array));

/* 
[ 9, 1, 2, 3, 4, 5 ] 9 1
[ 1, 9, 2, 3, 4, 5 ] 9 2
[ 1, 2, 9, 3, 4, 5 ] 9 3
[ 1, 2, 3, 9, 4, 5 ] 9 4
[ 1, 2, 3, 4, 9, 5 ] 9 5
one pass complete
false
[ 1, 2, 3, 4, 5, 9 ] 1 2
[ 1, 2, 3, 4, 5, 9 ] 2 3
[ 1, 2, 3, 4, 5, 9 ] 3 4
[ 1, 2, 3, 4, 5, 9 ] 4 5
one pass complete
true
[ 1, 2, 3, 4, 5, 9 ]
 */
