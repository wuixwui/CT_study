# 프로그래머스

## [크레인 인형뽑기 게임](https://programmers.co.kr/learn/courses/30/lessons/64061)

---

### 이해

n개의 음이 아닌 정수가 있습니다. 이 수를 적절히 더하거나 빼서 타겟 넘버를 반환.

### 계획

0000 : 0
0001 : 1
0010 : 2
0011 : 3
0100 : 4
0101 : 5
0110 : 6
0111 : 7
1000 : 8
1001 : 9
1010 : 10
1011 : 11
1100 : 12
1101 : 13
1110 : 14
1111 : 15
10000 : 16

(1<<0) -> 0001 => (0011 & 0001) = 0001 == 0001 -> 1 -> +
(1<<1) -> 0010 => (0011& 0010) = 0010 == 0010 -> 1 -> +
(1<<2) -> 0100 => (0011 & 0100) = 0000 != 0100 -> 0 -> -
(1<<3)->1000 => (0011 & 1000) = 0000 != 1000 ->0 -> -
numbers [1,1,1,1] -> 길이: size : 4
0001 << 4 -> 10000 = 16 : max

0일 떄 뺀다.(-)

- if ( (i & (1 << (j)) === (1 << (j)).toString(2))

  괄호를 사용하지 않았을 때 문제가 발생했던 이유는 ===연산자보다 & 의 우선순위가 낮기 때문이다.

### 실행

```jsx
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
```

### 회고
