function solution(ingredient) {
  const stack = [];
  let count = 0;

  ingredient.forEach(재료 => {
    stack.push(재료);

    if (stack.length >= 4) {
      const 뒤에서재료4개 = stack.slice(-4).join("");
      if (뒤에서재료4개 === "1231") {
        stack.splice(-4);
        count++;
      }
    }
  });

  return count;
}

solution([1, 2, 3, 1, 2, 3, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1, 1, 1, 1, 1, 1, 2, 3, 3, 1, 2, 3, 1, 3, 3, 3, 2, 1, 2, 3, 1]);

// 정규표현식 - 답은 구할 수 있으나 시간초과
function solution2(ingredient) {
  let answer = 0;
  const regex = new RegExp(1231, "i");
  let str = ingredient.join("");
  while (regex.test(str)) {
    str = str.replace(regex, "");
    answer++;
  }

  return answer;
}
