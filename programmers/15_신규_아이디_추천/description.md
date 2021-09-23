# 프로그래머스

## 신규 아이디 추천

### [문제 링크](https://programmers.co.kr/learn/courses/30/lessons/72410)

---

### detail

> ```js
> const vaildChar = [
>   '-',
>   '.',
>   '_',
>   '0',
>   '1',
>   '2',
>   '3',
>   '4',
>   '5',
>   '6',
>   '7',
>   '8',
>   '9',
>   'a',
>   'b',
>   'c',
>   'd',
>   'e',
>   'f',
>   'g',
>   'h',
>   'i',
>   'j',
>   'k',
>   'l',
>   'm',
>   'n',
>   'o',
>   'p',
>   'q',
>   'r',
>   's',
>   't',
>   'u',
>   'v',
>   'w',
>   'x',
>   'y',
>   'z',
> ];
> ```

    let count = 0

canUse와 count는 각각 2단계와 3단계를 위한 상수,변수 입니다.

2단계는 사용할 수 있는 문자 `소문자, 숫자, -, . _` 가 아닌 문자들을 제외시키는 것이었는데, 처음에는 아스키 넘버를 생각했었습니다.

아스키 넘버로 바꾼다면

> 숫자 = 48~57
> `-` = 45
> `.` = 46
> `_` = 95
> 소문자 = 97~122

가 됩니다.

이를 코드로 나타내기 위해서는

```js
const removeInvalidChar = str => {
  for (let i = 0; i < str.length; i++) {
    if (!(
      str.charCodeAt(i) === 45 ||
      str.charCodeAt(i) === 46 ||
      str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57 ||
      str.charCodeAt(i) === 95 ||
      str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122
    )) {
      str = str.replace(str[i], '')
      i--
    }
  }
>
  return str
}
```

비교 연산자를 연속적으로 사용해야 했기에, 조건에 사용되는 문자들이 많지 않았기에 그냥 따로 배열을 만들어 배열 안 비교를 사용하기로 결정했습니다.

#### 1단계 & 2단계

> `answer = new_id.toLowerCase().split("").filter((char) => vaildChar.includes(char))`

- 1단계
  대문자를 소문자로 바꾸는 문자열 메소드 `toLowerCase()`를 사용하여 소문자로 이루어진 문자열로 바꾼뒤 `split()`를 이용해서 배열로 바꿉니다.

- 2단계
  미리 만들어둔 `vaildChar`와 `filter()` 메소드를 이용하여 사용하지 못하는 문자를 제외시킨 새로운 배열을 생성합니다.

#### 3단계

```js
let temp = [];

answer.forEach(function (item) {
  if (item !== '.') {
    temp.push(item);
    count = 0;
  }
  if (count === 0 && item === '.') {
    temp.push(item);
    item === '.' ? (count += 1) : (count = 0);
  }
});
```

중복으로 사용된 `.`를 하나의 `.`로 바꾸기 위해서 미리 선언해 둔 count변수를 사용합니다.

temp 배열을 선언해서 `.`이 중복될 경우는 temp 배열에 한번만 넣어줍니다.

#### 4단계

`if(temp[0] === "."){temp.shift(".")}`
`if(temp[temp.length-1] === "."){temp.pop(".")}`

> 두번째 코드는 6단계에서 중복되는 코드이기 때문에 삭제해 주어도 됩니다.

끝과 앞이 `.` 일 경우, `.`를 제거해 줍니다.

#### 5단계

`if(temp.length === 0){temp.push("a")}`

빈 배열일 경우, a를 추가해 줍니다.

#### 6단계

```js
answer = temp.filter((item, i) => i < 15);
if (answer[answer.length - 1] === '.') {
  answer.pop('.');
}
```

#### 7단계

```js
if (answer.length <= 2) {
  while (answer.length < 3) {
    answer.push(answer[answer.length - 1]);
  }
}
```

길이가 3이 되기 전까지 마지막 문자를 추가합니다.

`return answer.join("");`
만들어진 배열을 다시 문자열로 변환후 반환합니다.

---

<br />

## Others

이번 문제를 풀면서 조금 더 JS에 익숙해지면 정규식을 공부해야 겠다고 느꼈다.

여러줄로 작성되는 코드들이 정규표현식을 이용하면 단 몇줄로 정리될 수 있다니!😗

_정리되는 풀이들은 정규표현식만을 사용한 풀이는 제외하여 정리하였습니다._

#### 1. 문자열 - indexOf와 slice

```js
function solution(nid) {
  var ans = '';
  for (let i = 0; i < nid.length; i++) {
    let c = nid[i].toLowerCase();
    if ('0123456789abcdefghijklmnopqrstuvwxyz.-_'.indexOf(c) === -1) continue;
    if (c === '.' && ans[ans.length - 1] === '.' && nid[i - 1]) continue;
    ans += c;
  }
  if (ans[0] === '.') ans = ans.slice(1);
  ans = ans.slice(0, 15);
  if (ans[ans.length - 1] === '.') ans = ans.slice(0, ans.length - 1);
  if (!ans) ans = 'a';
  while (ans.length < 3) ans += ans[ans.length - 1];
  return ans;
}
```

```js
for (let i = 0; i < nid.length; i++) {
  let c = nid[i].toLowerCase();
  if ('0123456789abcdefghijklmnopqrstuvwxyz.-_'.indexOf(c) === -1) continue;
  if (c === '.' && ans[ans.length - 1] === '.' && nid[i - 1]) continue;
  ans += c;
}
```

문자열을 하나씩 소문자로 바꾸면서 비교합니다.
`.indexOf(c) === -1` indexOf는 해당 문자가 문자열 안에 존재하지 않는다면 -1을 반환합니다. 이를 이용해서 invaild한 문자가 있을 경우 `continue`를 이용해서 넘어가게 됩니다.

또 &&비교 연산자를 이용해서 해당 문자가 `.` 이고 , 마지막 문자가 `.` 이면 빈문자열일 경우(중복될 경우) `continue`를 이용해서 넘어가게 됩니다.

> `nid[i - 1]`는 무엇에 필요한 것일까? 🤔

`if (ans[0] === ".") ans = ans.slice(1);`
시작이 `.`일 경우 인덱스 1번 부터 끝까지

`ans = ans.slice(0, 15);`
15자 까지만 사용가능

`if (ans[ans.length - 1] === ".") ans = ans.slice(0, ans.length - 1);`
끝이 `.`이면 제거

`if (!ans) ans = "a";`
빈문자열이면 a추가

`while (ans.length < 3) ans += ans[ans.length - 1];`
문자열의 길이가 3보다 작을 경우 마지막 문자를 길이가 3이 될때까지 더함

#### 2. 약간의 정규식

```js
function solution(new_id) {
  // step1
  new_id = new_id.toLowerCase();
  // step2 alphanumerica, -, _, . => 정규식으로 해결
  new_id = new_id.replace(/[^\w-\._]+/g, '');
  // step3
  new_id = new_id.replace(/[\.]{2,}/g, '.');
  // step4
  new_id = new_id[0] === '.' ? new_id.slice(1) : new_id;
  new_id =
    new_id[new_id.length - 1] === '.'
      ? new_id.slice(0, new_id.length - 1)
      : new_id;
  // step5
  new_id = new_id.length === 0 ? 'a' : new_id;
  // step6
  new_id = new_id.length > 15 ? new_id.slice(0, 15) : new_id;
  new_id = new_id[14] === '.' ? new_id.slice(0, 14) : new_id;
  // step7
  if (new_id.length < 3) {
    new_id = new_id + new_id[new_id.length - 1].repeat(2);
    new_id = new_id.slice(0, 3);
  }
  return new_id;
}
```

```js
if (new_id.length < 3) {
  new_id = new_id + new_id[new_id.length - 1].repeat(2);
  new_id = new_id.slice(0, 3);
}
```

마지막 문자를 repeat()메소드를 이용해서 2번씩 반복시킨다. 반복하다가 3글자를 넘길 때를 대비해서 slice()를 이용해서 0~2까지 잘라낸다.

#### 3. 문자열을 이용한

```js
const solution = (id) => {
  id = id.toLowerCase();
  id = removeInvalidChar(id);
  id = removeInvalidDots(id);
  if (!id) {
    id = 'a';
  }

  if (id.length > 15) {
    id = id.slice(0, 15);
  }
  id = removeInvalidDots(id);

  if (id.length < 3) {
    let lastChild = id.charAt(id.length - 1);

    do {
      id += lastChild;
    } while (id.length === 2);
  }

  return id;
};
```

미리 각 단계에 필요한 함수를 만들어 줍니다.

배열로 변환 후 지우고 싶은 index를 삭제 후 다시 문자열로 변환

```js
const removeStrIndex = (str, index) => {
  let result = str.split('');
  result.splice(index, 1);

  return result.join('');
};
```

아스키 넘버와 비교 연산자를 이용한 문자열 비교

```js
const removeInvalidChar = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (
      !(
        str.charCodeAt(i) === 45 ||
        str.charCodeAt(i) === 46 ||
        (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) ||
        str.charCodeAt(i) === 95 ||
        (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)
      )
    ) {
      str = str.replace(str[i], '');
      i--;
    }
  }

  return str;
};
```

replace()메소드를 이용한 중복 문자 제거 및 처음과 끝이 `.`일 경우 `.`제거

```js
const removeInvalidDots = (str) => {
  do {
    str = str.replace('..', '.');
  } while (str.indexOf('..') > -1);

  if (str.startsWith('.')) {
    str = removeStrIndex(str, 0);
  }
  if (str.endsWith('.')) {
    str = removeStrIndex(str, str.length - 1);
  }

  return str;
};
```
