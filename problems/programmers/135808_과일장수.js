function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a);

  const times = Math.floor(score.length / m);

  let i = 1;
  while (times >= i) {
    const a = score.slice((i - 1) * m, i * m);
    answer += Math.min(...a) * m;
    i++;
  }

  return answer;
}

// solution(3, 4, [1, 2, 3, 1, 2, 3, 1]);
solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]);
