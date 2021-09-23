# 프로그래머스

## 콜라츠 추측

### [문제 링크](https://programmers.co.kr/learn/courses/30/lessons/12940?language=javascript)

---

### detail

---

- [유클리드 호제법](https://dimenchoi.tistory.com/46)

> A를 B로 나눈 몫을 Q라고 하고, 나머지를 R이라고 하자. 이때 gcd(A,B) = gcd(B,R)이다.

라는 정리에서 기인하는 유클리드 호제법은 다음과 같습니다.

- A와 B의 최대공약수를 구하기 위해서 A를 B로 나눈 나머지 R1을 구합니다.

- B를 R1으로 나눈 나머지 R2를 구합니다.

- R1을 R2로 나눈 나머지 R3를 구합니다.

- 이 과정을 계속 반복하여, 어느 한 쪽이 나누어떨어질 때까지 반복합니다. 이 직전 얻은 나머지가 최대공약수입니다.

최소공배수는 A\*B/gcd로 계산하면 됩니다.

---

```js
let up = 0;
let down = 0;
let temp = 0;
```

우선 인수로 받은 두 수중 큰 수를 저장할 up, 작은 수를 저장할 down 변수를 생성합니다.
또 유클리드 호제법 중 나머지를 저장해둘 임시변수 temp도 함께 생성합니다.

```js
if (n >= m) {
  up = n;
  down = m;
} else {
  up = m;
  down = n;
}
```

if 문을 이용해서 인수로 받은 두 수를 큰 수와 작은 수로 구분해서 up과 down에 할당시킵니다.

```js
while (down !== 0) {
  answer[0] = down;
  temp = up % down;
  up = down;
  down = temp;
}
```

while문을 통해서 유클리드 호제법으로 최대 공약수를 구해 answer의 [0]에 넣어줍니다.

이 때 주의 해야하는 점은 answer에 넣은 후에 다음 계산을 진행해야 down === 0이 되었을 때 answer[0]에 들어있는 수가 나누어 떨어지기 직전에 얻은 나머지가 될 수 있습니다.

```js
answer[1] = (m * n) / answer[0];
return answer;
```

그 다음 answer[1]에 최대공배수를 넣어준 뒤 반환합니다.

<br />

## Other

#### 1. 재귀함수

```js
function greatestCommonDivisor(a, b) {
  return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);
}

function leastCommonMultipleOfTwo(a, b) {
  return (a * b) / greatestCommonDivisor(a, b);
}

function gcdlcm(a, b) {
  return [greatestCommonDivisor(a, b), leastCommonMultipleOfTwo(a, b)];
}
```

#### Math.abs()

주어진 숫자의 절대값을 반환합니다. x가 양수이거나 0이라면 x를 리턴하고, x가 음수라면 x의 반대값, 즉 양수를 반환합니다.

빈 객체, 하나 이상의 요소를 가진 배열, 숫자가 아닌 문자열, undefined나 빈 매개변수를 받으면 NaN을 반환합니다. null, 빈 문자열이나 빈 배열을 제공하면 0을 반환합니다.

```js
function greatestCommonDivisor(a, b) {
  return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);
}
```

- b가(나머지가) 0이 되기 전까지 재귀함수가 호출된다.
- a는 이전 나머지 b는 새로운 나머지
- Math.abs(a)는 a,b중 어디에 큰 수가 들어갈지 모르기 때문에 절대값으로 반환한다.

재귀함수 잘하고 싶네요..

#### 2. for 문

```js
function gcdlcm(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}
```

for 문에 모든 조건을 활용하여 a,b를 새롭게 할당합니다.
