# 프로그래머스

## [없는 숫자 더하기](https://programmers.co.kr/learn/courses/30/lessons/86051)

---

### 이해

numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 반환하기

### 계획

- 0부터 9까지 담고 있는 새로운 배열 numList를 생성한다.
- numList를 순회하면서 numbers안에 들어있지 않는 수들만 반환한다.
- numbers안에 들어있는 수들을 합해서 반환합니다.

### 실행

```jsx
function solution(numbers) {
  const numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return numList
    .filter((x) => !numbers.includes(x))
    .reduce((acc, crt) => crt + acc, 0);
}
```

### 회고

- 익숙하지 않다보니 계획 -> 실행 순서가 아니라 실행 순서 -> 계획으로 풀게 된다..
