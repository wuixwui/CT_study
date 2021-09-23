# 프로그래머스

## 짝수와 홀수

### [문제 링크](https://programmers.co.kr/learn/courses/30/lessons/12937)

---

### detail

삼항연산자를 사용합니다.

---

<br />

## Other

#### 1. Falsy Truthy

```js
unction evenOrOdd(num) {
   return num % 2 ? "Odd" : "Even";
}
```

(== 1 홀수냐)는 질문이 암시된 조건문

- 1은 truthy한 값이기 때문에 num이 홀수일 경우 true가 되어 "Odd"를 반환합니다.
  반대로 0은 falsy한 값이기 때문에 num이 짝수일 경우 false가 되어 "Even"을 반환합니다.

참고로 num이 음수의 경우 -2%2 를 하면 -0이 나옵니다.

> -0은 자바스크립트가 falsy하게 보는 7가지 (-0, 0, Null, NaN, undefined, false, '') 값 중에 하나라고 합니다.

#### 2. - check

```js
function evenOrOdd(num) {
  var result = 'Even';
  if (num < 0) return false;
  if (num % 2 == 1) result = 'Odd';

  return result;
}
```

`-`값을 가진 수가 들어왔을 때는 false값을 반환합니다.

## 형변환과 Falsy와 Turthy

[자바스크립트에서 ([] == 0)이 true인 이유 - cada](https://velog.io/@cada/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%90%EC%84%9C-0%EC%9D%B4-true%EC%9D%B8-%EC%9D%B4%EC%9C%A0)

### JS의 값의 종류

1. 원시값 (Primitive Value)
   number, dtring, boolean, null, undefined
2. 참조값 (Reference Value)
   array, function, object

### + 연산자에 따른 형변환

- 연산자는 다른 수학 연산자와 다르게 덧셈 연산 외에 두 문자열을 합치는 특별한 연산을 가지고 있습니다.

```js
'hello ' + 'world'; // 'hello world'
1 + 'hello'; // '1hello'
'3' + 5; // '35'
```

> -, \*, / 및 다른 수학적 연산자는 오직 수학적 연산을 가지고 있습니다.

```js
1 * '2'; // 2
'hello ' + 'world'; // 'hello world'
'hello' - 'ello'; // NaN
```

### 참조값의 형변환

자바스크립트에서의 각 연산자는 원시값으로 계산되어야 하기에 참조값은 연산에 사용할 수 없습니다.

> 그러나 array의 `toString()` 함수로 인해

```js
[] + 1 => [].toString() + 1 => '' + 1 => '1'
```

array가 연산에 사용됐을 때 내부적으로 toString() 함수가 호출되어 **array를 string으로 바꾸고 + 연산자가 1을 문자열로 형변환을 시켜서 '1'이 반환**되는 것입니다.

Object 또한 `toString()`함수가 존재하기 때문에 위와 같은 연산이 가능합니다.

하지만 {}의 string형태는 ' '가 아닌 '[object Object]' 입니다.

### == 연산에서 형변환

참조값이 ==연산에 사용될 경우에는, 위에서 설명한 것과 마찬가지로 참조값이 우선 toString() 연산을 통해 원시값으로 형변환됩니다.

```js
if(0 == '') {
  console.log('Hello World!'); // 출력 O
```

### Falsy Truthy

- Falsy : 0, -0, 0n(bigint), '', null, undefined, NaN
- Trurhy : Falsy한 값을 제외한 모든 값

#### if([])는 동작하지만 if(0)는 동작하지 않는 이유

> [] === truthy
> 0 === falsy

truthy와 falsy를 결정하는 과정에서는 형변환이 발생하지 않습니다.

> 그러니까 [] => ' ' => truthy 가 아닌 [] 자체가 truthy 하다는 것입니다.
