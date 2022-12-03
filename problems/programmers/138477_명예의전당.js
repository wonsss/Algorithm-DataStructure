function solution(k, scores) {
  const answer = [];
  const gloryList = [];

  scores.forEach(score => {
    gloryList.push(score);
    gloryList.sort((a, b) => b - a);

    if (gloryList.length > k) {
      gloryList.pop();
    }

    let lowestScore = gloryList[gloryList.length - 1];
    answer.push(lowestScore);
  });

  return answer;
}

const k1 = 4;
const score1 = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000];
const result1 = [0, 0, 0, 0, 20, 40, 70, 70, 150, 300];

solution(k1, score1);
