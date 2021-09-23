function solution(arr1, arr2) {
  let answer = [];
  answer = arr1.map((row, i) => row.map((col, j) => col + arr2[i][j]));
  return answer;
}
