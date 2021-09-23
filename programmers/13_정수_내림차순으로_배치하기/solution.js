function solution(n) {
  var answer = 0;
  answer = [...String(n)];
  answer = parseInt(answer.sort((a, b) => b - a).join(''));
  return answer;
}
