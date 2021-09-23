# 프로그래머스

## 숫자 문자열과 영단어

### [문제 링크](https://programmers.co.kr/learn/courses/30/lessons/81301)

---

### detail

> ```js
> while(s.indexOf(englishToNumber[english]) !== -1){
> ```

            s = s.replace(englishToNumber[english], english)

중복되는 숫자가 있을 수 있기 때문에 if 문이 아닌 while문을 사용한다.

---

<br />

## Others

#### 1. split()와 join()

```js
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;
>
    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }
>
    return Number(answer);
}
```

```js
for (let i = 0; i < numbers.length; i++) {
  let arr = answer.split(numbers[i]);
  answer = arr.join(i);
}
```

바꿔야 하는 숫자 단어로 쪼갠 뒤 다시 인덱스인 숫자로 합치기 때문에 중복되는 단어들도 해결할 수 있다.

### RegExp

```js
function solution(s) {
    let charSet = {
        "zero" : 0,
        "one" : 1,
        "two" : 2,
        "three" : 3,
        "four" : 4,
        "five" : 5,
        "six" : 6,
        "seven" : 7,
        "eight" : 8,
        "nine" : 9,
    }
>
    for(let [key, value] of Object.entries(charSet)) {
        let re = new RegExp(`${key}`,"g");
        s = s.replace(re, value);
    }
    return parseInt(s);
}
```

```js
for (let [key, value] of Object.entries(charSet)) {
  let re = new RegExp(`${key}`, 'g');
  s = s.replace(re, value);
}
```

- `Object.entries() `
  for...in와 같은 순서로 주어진 객체 자체의 enumerable 속성 [key, value] 쌍의 배열을 반환합니다.

#### RegExp

정규표현식 객체 생성자
[MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

> 정규 표현식이 자꾸 나오는 거 보면 슬슬 공부해야하는 건가보당..! 🙄
