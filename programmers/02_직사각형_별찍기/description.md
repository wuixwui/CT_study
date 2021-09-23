# 프로그래머스

## 직사각형 별찍기

### [문제 링크](https://programmers.co.kr/learn/courses/30/lessons/12969/solution_groups?language=javascript&type=all)

---

### detail

```js
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {}
```

처음 보고 utf랑 encoding 있으니까 어떻게 읽어올지랑 'data'가 들어오면 화살표 함수니까 함수를 실행하겠지? 라고 생각하면서 ~~무시하고~~ 진행했는데...

검색해 보니 nodejs에서 입출력 처리할 때 사용하는 코드였습니다! 멀게 느껴지던 nodejs 였는데 이렇게 훅 다가오다니 설레네요.. 🤔

```js
const n = data.split(' ');
const a = Number(n[0]),
  b = Number(n[1]);
```

그 다음으로 나와있던 전제에서는 받은 데이터를 나누어 배열에 담고 a와 b의 변수에 각각 나누어 담습니다.

```js
    for (let i = 1; i <= b; i++) {
        const star = []
        for (let j = 1; j <= a; j++){
            star.push("*")
        }
        const starLine = star.join("")
        console.log(starLine)
```

사실 이 부분에서 바로 처음 for문 안에 `const starLins = "*" *a` 식으로 작성했다가 `NaN`이 나오고 파이썬이 그리워졌었습니다.🙄 별로 친하지도 않은데..

JS에서는 데이터형끼리 친하지 않는다는 걸 더 잘 기억해 두어야 겠어요
[참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures)

> 문자는 문자끼리.. 숫자는 숫자끼리..

그래서 어떻게 하면 좋을까 생각하다가 star라는 변수 안에 배열로 가로 길이인 a번 만큼 넣어버렸습니다.

```js
const star = [];

for (let j = 1; j <= a; j++) {
  star.push('*');
}
```

그리고 star 배열을 문자열로 합친 변수 starLine을 만들고 출력해줍니다.

```js
const starLine = star.join('');
console.log(starLine);
```

적다가 깨달은 건데 그렇다면 굳이 star배열을 담는 for문을 for문 안에 담아서 행을 만들때마다 생성할 필요가 없다는 것을 깨달았어요..

data가 들어왔을 때 한번만 생성되면 되니까요!

```js
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  const star = [];
  for (let j = 1; j <= a; j++) {
    star.push('*');
  }
  for (let i = 1; i <= b; i++) {
    const starline = star.join('');
    console.log(starline);
  }
});
```

좀 더 빠르게 구해지겠죠!😋

---

## Other

```js
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  const row = '*'.repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});
```

다른 사람의 풀이를 보는 것만큼 좋은 공부는 없는 것 같아요.
물론 풀지도 않고 보는 건 좋지 않겠지만!

`.repeat`이라는 함수를 배울 수 있었어요.
제가 배열에 넣고 빼고 지지고 볶고 하던게 저 함수를 알았더라면 쉽게 해결이 될 수 있었다니 😑

> `str.repeat(integer count)`
> 문자열을 반복한 값의 문자열을 반환하는 메서드입니다.
>
> 0이 count로 들어가면 빈 문자열이 반환됩니다.
> IE는 Edge부터 지원합니다.
