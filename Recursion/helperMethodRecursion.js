function collectOddValues(arr) {
  let result = []; // 데이터를 저장한 빈 배열, 이 빈 배열을 재귀함수 안에 정의하면 재귀호출시마다 초기화되는 문제가 있으므로, 재귀함수 밖에 정의한다.

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr); // 헬퍼 메소드 재귀는 재귀형이 아닌 외부 함수가 재귀형인 내부 함수를 호출하는 형태이다.

  return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);
