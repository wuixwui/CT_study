# 프로그래머스

## 정수 제곱근 판별

### [문제 링크](https://programmers.co.kr/learn/courses/30/lessons/12934)

---

### detail

```js
for (let i = 1; i<= n; i++){
	if(i === n && i !== 1){return answer = -1}
```

소수일 경우 -1을 리턴하려면, 1에서 부터 n까지 제곱해보아도 n이 되지 않는 경우일 것이다.
즉 i = n이 된다면 -1을 반환해야한다.

하지만 만약 n이 1이라면, 1의 제곱은 1이고 1은 1이기 때문에 이 경우 1이 다음단계로 넘어가지 못하고 -1을 반환해 버린다.
그렇기 때문에 논리 연산자 &&을 이용해서 1이 아닌 조건을 추가해준다.

```js
if (i * i === n) {
  return (answer = (i + 1) * (i + 1));
}
```

앞의 조건에맞지 않는다면 다음 조건문을 확인하게 된다. 제곱이 n과 같아진다면 i+1을 해준뒤 제곱을 반환한다.

---

<br />

## Others

#### 1. Math.sqrt() & switch-case

```js
function nextSqaure(n) {
  switch (n % Math.sqrt(n)) {
    case 0:
      return Math.pow(Math.sqrt(n) + 1, 2);
    default:
      return 'no';
  }
}
```

- Math.aqrt()
  숫자의 제곱근을 반환합니다.
  주어진 숫자에 루트를 씌웁니다. 만약 숫자가 음수이면 NaN을 반환합니다.
  `Math.sqrt(2); // 1.414213562373095`
  `Math.sqrt(9); // 3`
  `Math.sqrt(-1); // NaN`  
  <br/>

- Math.pow(base, exponent)
  `**`
  base^exponent처럼 base 에 exponent를 제곱한 값을 반환합니다.
  밑(base) 값이 음수이고 지수(exponent)가 정수가 아닌 경우 결과는 NaN입니다.
  `Math.pow(-7, 3); // -343 (세제곱은 음수가 될 수 있습니다.)`
  `Math.pow(-7, 0.5); // NaN (음수는 실제 제곱근을 가지지 않습니다.)`

#### 2. Number.isInteger() & Math.pow()

```js
function nextSqaure(n) {
  var result = 0;
  var n = Math.sqrt(n);
  result = Number.isInteger(n) ? Math.pow(n + 1, 2) : 'no';
  return result;
}
```

- Number.isInteger()
  값이 정수면 true를, 아니면 false를 반환합니다. 값이 NaN이거나 Infinity여도 false를 반환합니다.
