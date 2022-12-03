function solution(food) {
  let answer = "";

  food.forEach((f, i) => {
    if (f === 1) {
      return;
    }
    const count = Math.floor(f / 2);
    answer += String(i).repeat(count);
  });

  answer = answer + "0" + answer.split("").reverse().join("");
  return answer;
}

solution([1, 3, 4, 6]);
