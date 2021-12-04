function charCount(str) {
  const result = {};
  for (let char of str) {
    // 모두 소문자로 통일한다
    char = char.toLowerCase();
    // 영문자와 숫자인 경우만 처리하도록 조건 추가
    if (/[a-z0-9]/.test(char)) {
      // 값이 이미 있는(truthy) 경우 좌측 실행, 없는 경우(falsey) 우측 실행
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}
console.log(charCount('helloㄴㅇㄹ123'));
