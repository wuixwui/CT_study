# 프로그래머스

## 핸드폰 번호 가리기

### [문제 링크](https://programmers.co.kr/learn/courses/30/lessons/12948)

---

### detail

```js
const phone_numberArr = [...phone_number];
```

우선 spread를 이용해서 문자열을 배열로 변환해줍니다.

```js
for (let i = 0; i < phone_numberArr.length - 4; i++) {
  phone_numberArr[i] = '*';
}
```

그리고 반복문을 이용해서 뒷자리 4자리만 남기고 "\*"로 변경해줍니다.

```js
answer = phone_numberArr.join('');
```

마지막으로 그렇게 만들어진 배열을 join()함수를 이용해서 다시 문자열로 변환해줍니다.

JS는 문자열은 인덱스로 불러오기만 가능합니다.
만약 배열로 바꾸지 않고 문자열 상에서
`phone_number[i] = "*"` 식으로 변경을 시도했다면

`TypeError [Error]: Cannot assign to read only property '0' of string`라는 오류를 볼 수 있을 것입니다...

.charAt(i)를 사용하면 가능할 것입니다.
[참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String)

---

## Other

1. repeat과 slice

```js
var result = '*'.repeat(s.length - 4) + s.slice(-4);
```

2. 삼항 연산자와 반복문

```js
for (var i = 0; i < s.length; i++) {
  result += i < s.length - 4 ? '*' : s.charAt(i);
}
```

3. 화살표 함수

```js
onst solution = n => [...n].fill("*",0,n.length-4).join("")
```

이외에 `str.substring(startind,endind)`등 다양한 문자열 함수를 볼 수 있었습니다.

단순하게 넘어갔던 개념인 문자열에 대해서 한번 알아봐야겠습니다.

---

## 문자열

[문자열 MDN](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/Useful_string_methods)

> 문자열은 객체입니다.
> 그 소리는 수많은 속성과 메서드를 사용할 수 있다는 뜻입니다.

1. 문자열의 길이
   - str`.length`;
     <br/>
2. 특정 문자열 찾기
   - str`[n]` : n번째 인덱스의 문자
   - str`[str.length-1]`: 마지막 문자
   - str`.indexof('under str')`
     하위 문자열을 찾을 경우 제일 첫번째 인덱스 넘버가 반환됩니다.
   - `-1`이 반환될 경우 해당 문자가 없다는 뜻
     <br/>
3. 문자열 추출
   - str`.slice(indexstart, indexend-1)`;
   - str`.slice(indexstart)`;
     시작 인덱스에서 끝까지
     <br/>
4. 대소문자 변경
   - str`.toLowerCase()`;
   - str`.toUpperCase()`;
     <br/>
5. 문자열의 일부를 변경
   - str`.replace('바꿔질 문자열','바꾸려는 문자')`;
   -

### 문자열 원형과 String 객체

JavaScript는 String 오브젝트와 원형의 문자열을 다르게 취급한다는 것에 주의해야 합니다.

```js
new String('hello');
```

는 객체입니다.

eval()함수를 사용 할 때 문자열 원형은 소스코드로, 객체형 문자열은 오브젝트로 반환합니다.
