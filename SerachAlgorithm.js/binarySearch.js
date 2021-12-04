// Original Solution
// 이 함수는 정렬된 배열과 검색할 값을 인수로 받는다.
function binarySearch(arr, elem) {
  // 배열의 시작 부분에 왼쪽 포인터를 만들고 배열의 끝 부분에 오른쪽 포인터를 만들고, 중간 포인터도 만든다.
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}

// Refactored Version
// 이 함수는 정렬된 배열과 검색할 값을 인수로 받는다.
function binarySearch(arr, elem) {
  // 배열의 시작 부분에 왼쪽 포인터를 만들고 배열의 끝 부분에 오른쪽 포인터를 만들고, 중간 포인터도 만든다.
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  // 검색한 값과 중앙 포인터의 값이 같지 않으며서 왼쪽 포인터가 오른쪽 포인터 앞에 오는 동안:
  while (arr[middle] !== elem && start <= end) {
    // 값이 크면 오른쪽 포인터를 중앙 포인터의 왼쪽으로 이동
    if (elem < arr[middle]) end = middle - 1;
    // 값이 작으면 왼쪽 포인터를 중앙 포인터의 오른쪽으로 이동
    else start = middle + 1;
    // 좌우 포인터의 중간 인덱스로 중앙 포인터를 재설정
    middle = Math.floor((start + end) / 2);
  }
  // 검색한 값과 중앙 포인터 값이 같은 경우, 해당 중앙 포인터 반환하고 이외에는 -1 반환
  return arr[middle] === elem ? middle : -1;
}

console.log(
  binarySearch(
    ['apple', 'banana', 'cola', 'dexter', 'eft', 'finder', 'google'],
    'google'
  )
);
