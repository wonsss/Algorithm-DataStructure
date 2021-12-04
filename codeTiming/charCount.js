function charCount(str) {
  // 마지막에 반환할 빈 객체를 만든다
  const result = {};
  // 문자열의 각 문자를 돌면서
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // 만약 객체에 해당 문자가 이미 들어갔으면, 문자의 개수에 1을 더한다
    if (result[char] > 0) {
      result[char]++;
    }
    // 만약 객체에 해당 문자가 없다면, 객체에 더해주고 값을 0으로 지정한다
    else {
      result[char] = 1;
    }
    // 객체를 반환한다
  }
  return result;
}

console.log(charCount('hello'));
