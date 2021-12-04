function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

console.log(linearSearch([34, 56, 1, 2], 1));

// Big O(n), n 이 커지면 배열의 길이도 길어지고 시간도 늘어난다. 이것은 Big O(n)의 값을 가지는 선형 탐색이다.