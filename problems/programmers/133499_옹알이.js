function solution(babbling) {
  let count = 0;
  const 발음목록 = ["aya", "ye", "woo", "ma"];
  const 연속발음 = 발음목록.map(발음 => 발음 + 발음);

  while (babbling.length) {
    let b = babbling.pop();

    if (연속발음.some(v => b.includes(v))) {
      continue;
    }

    발음목록.forEach(발음 => {
      const regex = new RegExp(발음, "gi");
      b = b.replace(regex, "*");
    });

    // 다 대체돼서 구분용문자인 *만 남아있은지 확인
    if (/^[*]+$/gi.test(b)) {
      count++;
    }
  }

  return count;
}

solution(["woayao"]);
