function solution(arr) {
  var answer = [];
  let min = arr[0];
  if (arr.length === 1) {
    return (answer = [-1]);
  }
  arr.forEach((i) => (i <= min ? (min = i) : (min = min)));
  arr.splice(arr.indexOf(min), 1);
  return arr;
}
