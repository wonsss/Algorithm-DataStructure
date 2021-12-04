/* - 두 문자열(긴 문자열, 찾는 패턴)을 받는 함수를 정의한다.
- 긴 문자열 루프를 돈다.
	- 짧은 문자열(찾는 패턴) 루프를 돈다.
		- 만약 문자가 일치하지 않으면, 내부 루프에서 벗어난다.
		- 문자가 일치하면 계속 진행한다.
	- 내부 루프(짧은문자열 루프)를 완료하고 일치하는 항목을 찾으면 일치 횟수를 증가시킨다.
- 모든 루프를 다 완료한 후 횟수를 반환한다. */

function naiveStringSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveStringSearch('wowomgzomg', 'omg')); // 2
