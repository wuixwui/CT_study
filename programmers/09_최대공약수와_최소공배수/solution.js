function solution(n, m) {
  var answer = [];
  let up = 0;
  let down = 0;
  let temp = 0;
  if (n >= m) {
    up = n;
    down = m;
  } else {
    up = m;
    down = n;
  }
  while (down !== 0) {
    answer[0] = down;
    temp = up % down;
    up = down;
    down = temp;
  }
  answer[1] = (m * n) / answer[0];
  return answer;
}
