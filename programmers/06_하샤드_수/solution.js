function solution(x) {
  var answer = true;
  const xArr = [...x.toString()];
  const xSum = xArr.reduce(
    (acc, current) => parseInt(acc) + parseInt(current),
    0
  );
  answer = x % xSum === 0 ? true : false;
  return answer;
}
