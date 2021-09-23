# 프로그래머스

## 하샤드 수

### [문제 링크](https://programmers.co.kr/learn/courses/30/lessons/12947)

---

### detail

```js
const xArr = [...x.toString()];
```

spread를 이용해서 배열로 변환하기 전에 `toString()`을 이용해서 받아온 숫자형을
문자형으로 변환을 먼저 해주어야합니다. 그렇지 않으면
["1","2"]가 아닌 [12]의 형태의 배열이 반환될 것입니다.

그렇게 된다면 자릿수를 합할 수 없게 됩니다.

```js
const xSum = xArr.reduce(
  (acc, current) => parseInt(acc) + parseInt(current),
  0
);
```

그리고 reduce를 사용해서 모든 자릿수를 합해줍니다.
하지만 바로 합할 수는 없습니다.

자릿수로 나누기 위해서 문자형으로 변환해두었기 때문에 `parseInt`를 이용해서
숫자로 변형시켜서 합해줍니다.

```js
answer = x % xSum === 0 ? true : false;
```

마지막으로 나눠서 0이 되는 하샤드 수는 true 그 외의 것들은 false를 answer에 담아줍니다.

---

<br />

## Other

1. String() + split('')

```js
function Harshad(n) {
  var result;
  var sum = 0;
  var arr = String(n).split('');
  for (var i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return n % sum == 0 ? true : false;
}
```

2. 강제 변환과 split('')

```js
function Harshad(n) {
  return !(n % (n + '').split('').reduce((a, b) => +b + +a));
}
```

- split()
  [str.split(separator,limit)](https://www.codingfactory.net/10424)</br>
  spread를 배운뒤로 문자열을 배열로 변환하는데 가장 많이 사용하고 있는데
  이는 하나의 char씩 나눠서 배열로 만들어줍니다.<br/>
  그러나 str.split("")는 나누어줄 기준(separator)과 한계를 직접정해 줄 수가 있습니다.

- 강제 형변환
  `(n + "")` 두번째 예시에서 사용된 형태입니다. 비어있는 문자열을 숫자형에 더해주면서
  숫자형이 문자열로 강제 변환이 된 것을 볼 수 있습니다.<br/>
  `(a, b) => +b + +a )` 이 또한 문자형을 + 기호를 이용해서 강제로 숫자형으로 변환시켜준 형태입니다.

---

## String() & toString()

String은 함수 toString은 메소드입니다.
The String() function returns the same value as toString() of the individual objects.

toString()의 경우는 String객체에 toString()메소드를 사용해서 다시 String객체를 가져오는 것일 테니 String()의 사용이 더 좋은 것이라고 생각합니다!
다음번엔 String()을 사용해야 겠습니다.
