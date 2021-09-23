# 프로그래머스

## 콜라츠 추측

### [문제 링크](https://programmers.co.kr/learn/courses/30/lessons/12943)

---

### detail

```js
let answer = 0;
```

answer 변수는 작업의 횟수를 저장할 변수입니다.

```js
while (num !== 1) {
```

입력 받은 수가 1이 되면 조건을 만족 시킨 것이기 때문에 결과값을 반환해야 합니다.

그렇기 때문에 `while`문을 사용해서 인수가 1이면 탈출하고 그렇지 않다면 계속해서 콜라츠의 단계를 밟아가도록 작성했습니다.

```js
if (answer === 500) {
  return (answer = -1);
}
```

그러나 숫자가 너무 커서 단계를 밟아가는 중 횟수가 500을 넘기게 될 경우 -1을 반환해 줍니다.

```js
num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
answer += 1;
```

이후 콜라츠 단계에 맞춰서 삼항연산자를 작성한뒤
횟수를 올려줍니다.

---

<br />

## Other

#### 1. 재귀함수

```js
function collatz(num, count = 0) {
  return num == 1
    ? count >= 500
      ? -1
      : count
    : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1, ++count);
}
```

해당 풀이의 답변에 while문 보다 재귀함수의 속도가 느리다고 적혀있었다.

인자로 num과 count를 받고, num인자를 콜라츠 단계에 맞춰서 계속 바꿔주는 방식인데
while문과 진행하는 방식은 같습니다.

#### 2. 화살표 함수

```js
const solution = (num) => collatzGuessCount(num, 0);
const collatzGuessCount = (num, acc) =>
  num === 1
    ? acc > 500
      ? -1
      : acc
    : collatzGuessCount(processCollatz(num), acc + 1);
const processCollatz = (num) => (num % 2 === 0 ? num / 2 : num * 3 + 1);
```

solution 함수 안에 collatzGuessCount 함수안에 processCollatz 함수

화살표 함수를 이용해서 필요한 단계들을 함수로 정리해서 사용했습니다.

#### 3. 좀 더 정리된 while

```js
function collatz(num) {
  var answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}
```

if 절 없이 && 비교연산자를 사용해서 인자가 1이 아니고 500이 아닐 때까지 while문을 돌리고 while문을 탈출했을 때 num이 1이 아니면 -1을 반환해 줍니다.

---

## argument 인자? 인수?

- parameter === 매개변수 === 인자

- argument === 전달인자 === 인수

매개변수랑 인수는 구분해서 잘 이해하고 있었는데 인자랑 인수를 무분별하게 사용하고 있었다는 깨달았다.

다음부터는 제대로 사용해야 겠습니다!😏
