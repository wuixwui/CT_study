# 프로그래머스

## 상호 평가

### [문제 링크](https://programmers.co.kr/learn/courses/30/lessons/83201?language=javascript)

---

### detail

> ```js
> const result = [];
> ```

````

우선 모든 평균값을 담을 result 변수를 선언합니다.

>```js
    for (let i = 0; i < scores.length; i++) {
 >     let min = scores[0][i];
      let max = scores[0][i];
      let minCount = 1;
      let maxCount = 1;
````

그리고 개인이 평가한 점수를 담고 있는 행을 찾기 위해 for문을 돌려줍니다.

for문 안에는 자신이 자신에게 준 값이 최소나 최대라면 제외할
최소값과 최대값을 담을 min과 max 변수와

그런 최소와 최대가 중복으로 나온다면 제외하지 않을 수 있도록 count변수를 각각 만들어줍니다.

> ```js
>
> ```

    for (let j = 1; j < scores.length; j++) {
        if (min === scores[j][i]) {
          minCount += 1;
        }
        if (max === scores[j][i]) {
          maxCount += 1;
        }
        if (scores[j][i] < min) {
          min = scores[j][i];
          minCount = 1;
        }
        if (scores[j][i] > max) {
          max = scores[j][i];
          maxCount = 1;
        }
      }

````

이번에는 개인이 평가 받은 점수를 담은 열을 찾기 위해서 새로운 for문을 생성해 돌려줍니다.

min과 max는 초기값을 [0][[i]로 지정해두었기 때문에 1 인덱스부터 꺼내어 비교해 갑니다.

같은 최소나 최대값이 나온다면 카운트를 올리고,
새로운 최소나 최대가 나온다면 바꿔줍니다.

>```js
let total = 0;
      for(let j = 0; j < scores.length; j++){
        total += scores[j][i];
      }
````

그리고 개인이 평가 받은 점수의 평균값을 구하기 위해서 모든 점수들을 더하는 total 변수를 만들어줍니다.

> ```js
>
> ```

      if (scores[i][i] === min && minCount === 1) {
        const sum = total - min
        const score = sum / (scores.length - 1);
        result.push(score);
        continue;
      }
      if (scores[i][i] === max && maxCount === 1) {
        const sum = total - max
        const score = sum / (scores.length - 1);
        result.push(score);
        continue;
      }
      result.push(total/ scores.length);

}

````

평균값이 구해졌다면 조건에 맞게 자신에게 최소 혹은 최대의 준 점수를 제외할 수 있도록 if문을 만들어 줍니다.
또한 중복되는 최소 최대일 경우 제외하지 않기 때문에 count가 1번인지도 && 비교 연산자를 가지고 확인해줍니다.

자신이 자신에게 준 최소, 최대 값이 있다면 total에서 제외하고 편균을 구하고 그렇지 않다면 전체 scores의 길이에서 구해줍니다.

그렇게 구해진 개인의 평균 점수들은 result에 순서대로 들어가게 됩니다.

>```js
return result
  .map((score) =>
    score >= 90
      ? "A"
      : score >= 80
      ? "B"
      : score >= 70
      ? "C"
      : score >= 50
      ? "D"
      : "F"
  )
  .join("");
}
````

마지막으로 각 점수들을 점수 평가표에 맞춰서 바꿔준 뒤 문자열로 변환해서 반환해줍니다.
