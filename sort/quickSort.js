function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // 피봇이 항상 첫 번째 요소라고 가정
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
}

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

/* for 루프
[4, 8, 2, 1, 5, 7, 8, 3]  i 1, arr[1] 8, swapIdx 0
[4, 2, 8, 1, 5, 7, 8, 3]  i 2, arr[2] 2, swapIdx 1 (8), 2<->8
[4, 2, 1, 8, 5, 7, 8, 3]  i 3, arr[3] 1, swapIdx 2 (8), 1<->8 
[4, 2, 1, 8, 5, 7, 8, 3]  i 4, arr[4] 5, swapIdx 2
[4, 2, 1, 8, 5, 7, 8, 3]  i 5, arr[5] 7, swapIdx 2
[4, 2, 1, 8, 5, 7, 8, 3]  i 6, arr[6] 8, swapIdx 2
[4, 2, 1, 3, 5, 7, 8, 8]  i 7, arr[7] 3, swapIdx 3(8), 3 <-> 8

swap(arr, 0, 3)
[3, 2, 1, 4, 5, 7, 8, 8] 3<->4 */

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
// 3,2,1    6,9,5
//     3      6
// 2,1      5  9
//   2
// 1
