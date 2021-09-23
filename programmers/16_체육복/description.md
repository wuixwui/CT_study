# 프로그래머스

## 체육복

### [문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42862)

---

### detail

```js
lost.sort((x, y) => x - y);
reserve.sort((x, y) => x - y);
```

정렬이 필요한 이유는 lost가 [3,1], reverse가 [2,4]일 경우 3은 2에게도 4에게도 빌릴 수가 있다, 그러나 1은 2에게만 빌릴 수 있다.

하지만 이 경우 배열이 순서대로 비교하게 된다면 3이 2에게 먼저 빌려버리기 때문에, 1은 빌릴 수 없게 된다.
그렇기 때문에 꼭 정렬을 시켜주어야 한다.

```js
let need = lost.filter((item) => !reserve.includes(item));
let rent = reserve.filter((item) => !lost.includes(item));
```

- **여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다.** 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.

위의 조건으로 인해서 서로 빌려주면 받지 않고, 자신이 잃어버리고 여분이 있다면 reverse와 lost 조건에서 제외되어야 합니다.

-> 그렇기 때문에 `filter()`와 `includes()`를 통해서 need는 자신이 여분을 가지고 있지 않기에 빌려야 하는 학생들을, rent는 도둑을 맞지 않고 여분이 있는 빌려줄 수 있는 학생들을 담은 새로운 배열을 만들어 줍니다.

```js
rent.forEach(function (item) {
  for (let i = 0; i < need.length; i++) {
    if (item + 1 === need[i] || item - 1 === need[i]) {
      need.splice(i, 1);
    }
  }
});
```

빌려줄 수 있는 배열의 item을 하나씩 꺼내 비교 하기 위해서 `forEach()` 메소드를 이용합니다.

그 다음 for()문을 이용해서 빌려야 하는 학생들과 빌려줄 수 있는 학생들의 사이즈를 비교한 후 빌릴 수 있다면 need 배열에서 splice() 메소드를 이용해서 제외시켜 줍니다.

`return n - need.length;`
모든 rent 배열을 도는 동안 빌리지 못한 사람만큼을 학생 수에서 제외해서 반환합니다.

---

<br />

## Others

#### 1. indexOf와 splice

```js
function solution(n, lost, reserve) {
  let tmp = reserve.slice();

  for (let i in tmp) {
    let key = lost.indexOf(tmp[i]);

    if (key != -1) {
      lost.splice(key, 1);
      reserve.splice(reserve.indexOf(tmp[i]), 1);
    }
  }

  for (let i of reserve) {
    let key = lost.includes(i - 1) ? lost.indexOf(i - 1) : lost.indexOf(i + 1);

    if (key != -1) {
      lost.splice(key, 1);
    }
  }

  return n - lost.length;
}
```

```js
let tmp = reserve.slice();
```

- .slice()를 사용하는 이유?
  slice를 이용해야지 참조하지 않고 새로운 객체를 생성할 수 있기 때문이다.
  [깊은 복사와 얕은 복사](https://medium.com/watcha/%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%AC%EC%99%80-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%AC%EC%97%90-%EB%8C%80%ED%95%9C-%EC%8B%AC%EB%8F%84%EC%9E%88%EB%8A%94-%EC%9D%B4%EC%95%BC%EA%B8%B0-2f7d797e008a)

```js
for (let i of reserve) {
  let key = lost.includes(i - 1) ? lost.indexOf(i - 1) : lost.indexOf(i + 1);

  if (key != -1) {
    lost.splice(key, 1);
  }
}
```

-1이 맞으면 -1, 아니면 +1의 사이즈를 확인해보기 때문에 전부 다 비교해 볼 수 있다.

이 방법으로 비교를 한다면 for문을 한번만 사용해서 돌릴 수 있다.

### 객체를 이용한 방법

```js
function solution(n, lost, reserve) {
  const students = {};
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    students[i] = 1;
  }
  lost.forEach((number) => (students[number] -= 1));
  reserve.forEach((number) => (students[number] += 1));

  for (let i = 1; i <= n; i++) {
    if (students[i] === 2 && students[i - 1] === 0) {
      students[i - 1]++;
      students[i]--;
    } else if (students[i] === 2 && students[i + 1] === 0) {
      students[i + 1]++;
      students[i]--;
    }
  }
  for (let key in students) {
    if (students[key] >= 1) {
      answer++;
    }
  }
  return answer;
}
```

학생들의 번호와 학생이 가지고 있는 수를 값으로 가지고 있는 객체를 생성하는 방법입니다.

## 탐욕법(Greedy)

[조코딩 - 탐욕법](https://www.zerocho.com/category/Algorithm/post/584ba5c9580277001862f188)

미래를 생각하지 않고 각 단계에서 가장 최선의 선택을 하는 기법입니다. 이렇게 각 단계에서 최선의 선택을 한 것이 전체적으로도 **최선이길 바라는** 알고리즘이죠.
_그 해결책이 최선이라는 걸 보장하지도 않고요._

물론 모든 경우에서 그리디 알고리즘이 통하지는 않습니다.
