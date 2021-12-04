function charCount(str) {
  const result = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric(0-9)
    !(code > 64 && code < 91) && // upper alphabet(A-Z)
    !(code > 96 && code < 123) // lower alphabet(a-z)
  ) {
    return false;
  }
  return true;
}

console.log(charCount('helloㄴㅇㄹ123'));
