function solution(s) {
  var answer = [];
  let count = 1;

  answer = [...s].map(function (char) {
    if (char === ' ') {
      count = 1;
      return ' ';
    }
    if (count % 2 !== 0) {
      count += 1;
      return char.toUpperCase();
    } else {
      count += 1;
      return char.toLowerCase();
    }
  });
  return answer.join('');
}
