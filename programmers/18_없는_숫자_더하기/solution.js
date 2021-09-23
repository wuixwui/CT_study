function solution(numbers) {
  const numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return numList
    .filter((x) => !numbers.includes(x))
    .reduce((acc, crt) => crt + acc, 0);
}
