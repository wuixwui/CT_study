function solution(phone_number) {
  let answer = '';
  const phone_numberArr = [...phone_number];
  for (let i = 0; i < phone_numberArr.length - 4; i++) {
    phone_numberArr[i] = '*';
  }
  answer = phone_numberArr.join('');
  return answer;
}
