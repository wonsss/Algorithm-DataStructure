// 2022.12.3
// lv1
// https://school.programmers.co.kr/learn/courses/30/lessons/131705

function solution(number) {
  var answer = 0;

  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          answer++;
        }
      }
    }
  }

  return answer;
}

const number = [-3, -2, -1, 0, 1, 2, 3];

solution(number);
