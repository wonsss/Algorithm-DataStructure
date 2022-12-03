const s1 = "banana";
const s2 = "abracadabra";
const s3 = "aaabbaccccabba";

function solution(s) {
  const sList = s.split("");
  let answer = 1;
  let target;
  let targetCount = 0;
  let otherCount = 0;
  sList.forEach(i => {
    if (!target) {
      target = i;
    }

    if (targetCount && targetCount === otherCount) {
      target = i;
      targetCount = 0;
      otherCount = 0;
      answer++;
    }

    if (target === i) {
      targetCount++;
    } else {
      otherCount++;
    }
  });

  return answer;
}
solution(s1);
solution(s2);
solution(s3);
