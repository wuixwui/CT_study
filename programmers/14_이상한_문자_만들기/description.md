# 프로그래머스

## 이상한 문자 만들기

### [문제 링크](https://programmers.co.kr/learn/courses/30/lessons/12930#)

---

## Others

#### 1. split() 사용

> ```js
> function toWeirdCase(s){
>   var result = "";
>   for(var word of s.split(" ")) {
> ```

    for(var i in word) {
      result += word[i][parseInt(i) % 2 == 0 ? "toUpperCase" : "toLowerCase"]();
    }
    result += " ";

};
return result.slice(0, -1);
}

#### computed property

computed property name은 표현식(expression)을 이용해 객체의 key 값을 정의하는 문법입니다.

각괄호 [] 안에 식을 넣을 수 있고, 식이 계산되고 그 결과가 속성명으로 사용됩니다.

```js
var i = 0;
var a = {
  ['foo' + ++i]: i,
  ['foo' + ++i]: i,
  ['foo' + ++i]: i,
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3
```

```js
for (var i in word) {
  result += word[i][parseInt(i) % 2 == 0 ? 'toUpperCase' : 'toLowerCase']();
}
```

위의 `word[i][parseInt(i) % 2 == 0 ? "toUpperCase" : "toLowerCase"]()`부분은 인덱스가 홀수라면(0부터 시작하기에 홀수일 경우 소문자로 출력) `word[i].toLowerCase()`로 사용이 되게 됩니다.

- `for(var i in word)`은 주로 객체 안에서 `for (let key in objsct)`형태로 사용이 되지만 **배열**에서 `for in`을 사용하게 되면 `i`의 위치의 인덱스 번호가 위치하게 됩니다.

- 공백이 많은 문자열 "try hello world"를 split(" ")으로 나누게 되면 'try', '', 'hello', '', '', '', 'world' 처음 공백을 제외한 나머지 공백의 수만큼 ''로 배열에 담깁니다.

```js
result += ' ';
```

split으로 없어진 공백을 다시 추가해주는 부분
