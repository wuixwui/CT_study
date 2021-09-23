function solution(new_id) {
  var answer = '';
  const vaildChar = [
    '-',
    '.',
    '_',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  let count = 0;
  // 1,2 단계
  answer = new_id
    .toLowerCase()
    .split('')
    .filter((char) => vaildChar.includes(char));
  // 3 단계
  let temp = [];
  answer.forEach(function (item) {
    if (item !== '.') {
      temp.push(item);
      count = 0;
    }
    if (count === 0 && item === '.') {
      temp.push(item);
      item === '.' ? (count += 1) : (count = 0);
    }
  });
  // 4단계
  if (temp[0] === '.') {
    temp.shift('.');
  }
  // 5단계
  if (temp.length === 0) {
    temp.push('a');
  }
  // 6단계
  answer = temp.filter((item, i) => i < 15);
  if (answer[answer.length - 1] === '.') {
    answer.pop('.');
  }
  // 7단계
  if (answer.length <= 2) {
    while (answer.length < 3) {
      answer.push(answer[answer.length - 1]);
    }
  }
  return answer.join('');
}
