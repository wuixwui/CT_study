function solution(arr) {
  var answer = 0;
  answer = arr.reduce((acc, current) => acc + current, 0) / arr.length;
  return answer;
}
