function solution(s) {
  const englishToNumber = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  for (let english in englishToNumber) {
    while (s.indexOf(englishToNumber[english]) !== -1) {
      s = s.replace(englishToNumber[english], english);
    }
  }

  return parseInt(s);
}
