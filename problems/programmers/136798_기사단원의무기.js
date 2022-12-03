function solution(number, limit, power) {
  const 무기목록 = [];

  // 1부터 number 까지 순차적으로 약수의 개수를 확인한다.
  for (let 현재기사번호 = 1; 현재기사번호 <= number; 현재기사번호++) {
    const 약수목록 = [];

    // 1부터 현재 수의 절반 까지만 반복문을 돌린다.
    // 약수는 본래 값을 제외하고 n/2보다 클 수 없기 때문이다.
    for (let i = 1; i <= Math.sqrt(현재기사번호); i++) {
      if (현재기사번호 % i === 0) {
        약수목록.push(i);
        약수목록.push(현재기사번호 / i);
      }
    }
    // 위에서 본래 값을 제외하고 반절만 돌렸기 때문에
    // 본래 값을 넣어준다 생각 하고 1을 더 더해준다.
    무기목록.push(new Set(약수목록).size);
  }
  const 협약필터공격력무기목록 = 무기목록.map(n => (n > limit ? power : n));

  return 협약필터공격력무기목록.reduce((acc, cur) => acc + cur, 0);
}

solution(10, 3, 2); // 10

// const set약수목록 = new Set([1, 2, 1, 3]).size;
