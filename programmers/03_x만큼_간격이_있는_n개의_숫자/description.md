# 프로그래머스

## x만큼 간격이 있는 n개의 숫자

### [문제 링크](https://programmers.co.kr/learn/courses/30/lessons/12954)

---

### detail

```js
for (let i = 1; i <= n; i++) {
  answer.push(x * i);
}
```

n번씩 늘어나야 하니까 for문을 사용해서 x에 i번 n번 곱하면서 answer 배열에 넣어주었습니다.
아무리 생각해도 이것보다 어떻게 더 짧게 써볼 수 있을까는 생각나지 않았어요..👶

---

## Other

```js
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
```

저렇게 연결된 모습을 메소드 체이닝이라고 한다고 합니다!

Array는 대문자로 시작하는 걸 보니까 객체인거 같아요.

#### Array

[js.info - array](https://ko.javascript.info/array)

> 숫자형 인수 하나를 넣어서 new Array를 호출하면 배열이 만들어지는데, 이 배열엔 요소가 없는 반면 길이는 인수와 같아집니다.

```js
let arr = new Array(2);
```

이렇게 만들어진 배열은 undefined를 두개 가지고 있습니다.

[MDN](https://developer.mozilla.org/ko/)

#### .fill

```js
arr.fill(value[, start[, end]])
```

- value는 배열을 채울 값
- start는 시작 인덱스, end는 끝 인덱스 입니다.

[poiemaweb](https://poiemaweb.com/js-array-higher-order-function)

#### .map

```js
arr.map(callback(currentValue[, index[, array]])[, thisArg])
```

- callback 새로운 배열 요소를 생성하는 함수
  - currentValue 배열안의 처리할 현재 요소
  - index 처리할 인덱스
  - array map()을 호출한 배열
- thisArg callback을 실행할 때 this로 사용되는 값

```js
function Prefixer(prefix) {
  this.prefix = prefix;
}
Prefixer.prototype.prefixArray = function (arr) {
  // 콜백함수의 인자로 배열 요소의 값, 요소 인덱스, map 메소드를 호출한 배열, 즉 this를 전달할 수 있다.
  return arr.map(function (x) {
    // x는 배열 요소의 값이다.
    return this.prefix + x; // 2번째 인자 this를 전달하지 않으면 this === window
  }, this);
};
const pre = new Prefixer('-webkit-');
const preArr = pre.prefixArray(['linear-gradient', 'border-radius']);
console.log(preArr);
// [ '-webkit-linear-gradient', '-webkit-border-radius' ]
```

this부분은 차근차근 익혀나가야겠다.
무슨 소리인지는 알겠는데 응용을 하라고 하면 아직 못할거 같은..?
