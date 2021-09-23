function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (i === n && i !== 1) {
      return (answer = -1);
    }
    if (i * i === n) {
      return (answer = (i + 1) * (i + 1));
    }
  }
}
