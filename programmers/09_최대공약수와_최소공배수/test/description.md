# 프로그래머스 +

> 🤔 테스트 해결 하고 있습니다.

## 정수론

[정수론](https://dimenchoi.tistory.com/46)

네 정수론이요.

소인수분해를 통해서 최대공약수와 최소 공배수를 구하고 싶었습니다.
![출처:https://dimenchoi.tistory.com/46](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbtHaCH%2FbtqA2NEGfxR%2FitKE31AIgbFRixt4JvOwO0%2Fimg.png)

### Solution()

```js
function factorization(num, arr) {
  if (num === 1) {
    arr.push(num);
    return arr;
  }
  for (let i = 2; i <= num; i++) {
    if (num === 0) {
      break;
    }
    while (num % i === 0) {
      num /= i;
      arr.push(i);
    }
  }
  if (arr.length === 1) {
    arr.unshift(1);
  }
  return arr;
}
```

우선 소인수분해 할 수 있는 함수를 만들어 줍니다.

```js
function solution(n, m) {
  var answer = [];
  let n_facto = [];
  let m_facto = [];
  let minDiv = 0;
  let maxMul = 0;

  n_facto = factorization(n, n_facto);
  m_facto = factorization(m, m_facto);

  minDiv = n_facto.filter((i) => m_facto.includes(i));

  minDiv = minDiv.length === 0 ? 1 : minDiv.reduce((arr, cur) => arr * cur, 1);

  maxMul = Math.ceil((m * n) / minDiv);
  console.log(maxMul);

  answer.push(minDiv, maxMul);

  return answer;
}
```
