function solution(X, Y) {
  let answer = "";
  const xArr = X.split("");
  const yArr = Y.split("");

  for (let i = 0; i < 10; i++) {
    const iCountInX = xArr.filter(n => Number(n) === i).length;
    const iCountInY = yArr.filter(n => Number(n) === i).length;
    answer += String(i).repeat(Math.min(iCountInX, iCountInY));
  }

  if (answer === "") return "-1";
  if (Number(answer) === 0) return "0";

  return answer
    .split("")
    .sort((a, b) => b - a)
    .join("");
}
