function solution(numbers, target) {
  let answer = 0;
  let length = numbers.length;
  let max = 1 << length;

  for (let i = 0; i < max; i++) {
    let tmp = 0;

    for (let j = 0; j < length; j++) {
      console.log('o:' + (i & (1 << j)));
      console.log(i & (1 << j));
      if ((i & (1 << j)) === 1 << j) {
        tmp += numbers[j];
      } else {
        tmp -= numbers[j];
      }
    }

    if (target === tmp) {
      answer += 1;
    }
  }
  return answer;
}
