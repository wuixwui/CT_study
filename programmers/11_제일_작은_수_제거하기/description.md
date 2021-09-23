# 프로그래머스

## 제일 작은 수 제거하기

### [문제 링크](https://programmers.co.kr/learn/courses/30/lessons/12935)

---

### detail

```js
let min = arr[0];
```

제일 작은 수를 저장하는 변수에 기본값으로 인수로 받아오는 배열의 제일 첫 숫자를 담아줍니다.
이후 비교를 더 빠르게 진행하기 위함입니다.

```js
if (arr.length === 1) {
  return (answer = [-1]);
}
```

또한 조건에 따라서 제일 작은 수뿐인 배열은 -1을 반환할 수 있는 조건문을 돌려줍니다.

```js
arr.forEach((i) => (i <= min ? (min = i) : (min = min)));
```

배열의 길이가 1인 배열들을 제외한 나머지 배열들은 가장 작은 수를 찾기 위해서 배열의 고차함수 `forEach`를 이용해 배열을 돌릴 수 있습니다.

미리 만들어 둔 min 변수와 배열의 값들을 비교하면서 min보다 작은 수가 나왔을 때 min의 값을 작은 수로 바꿔주면서 제일 작은 수를 구합니다.

```js
arr.splice(arr.indexOf(min), 1);
return arr;
```

그렇게 구한 작은 수로 `indexOf`로 인덱스 값을 구함과 동시에 `splice`를 이용해서 작은 수를 제거해 줍니다.

그런 뒤 arr을 반환하면 됩니다.

#### answer에 담아서 반환하지 않고 arr을 그대로 반환한 이유

splice 함수를 새로운 배열에 담게된다면 제거하고 싶은 수가 제거된 후의 남은 배열이 담기는 것이 아닌, **제거하고 싶은 수가 담긴 배열**이 담기게 된다.

그렇기에

```js
answer = arr.splice(arr.indexOf(min), 1);
return answer;
```

로 반환할 경우 [4,3,2,1]의 배열은 [1]을 반환하게 된다.

---

<br />

## Others

#### 1. Math.min()

```js
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}
```

`Math.min()` 함수를 사용해서 제일작은 수를 구한 뒤 `splice`를 이용해서 배열 안의 제일 작은 수를 제거합니다.

- 그러나 이 경우 전제조건으로 제일 작은 수가 중복되어서는 안된다는 조건이 필요합니다.

> Math.min()에 배열은 사용할 수 없다. 그러나 ...spread를 사용하게 된다면 [4,3,2,1]의 형태가 아닌 4,3,2,1의 형태로 들어가기 때문에 최소 값을 구할 수 있었던 것이다.
> spread를 사용하지 않으면 [4,3,2,1]배열이 하나의 인수로 사용되기에 NaN이 나온다.

#### 2. 작은 수가 중복될 경우

```js
function solution(arr) {
    // Array 함수 이용
    var min = arr.reduce((p, c) => Math.min(p,c))
    var r = arr.filter(v => v != min);
    r = r.length == 0 ? [-1] : r;
    console.log(r)
    return r;
```

> reduce 의 두번째 인자(acc의 초기값)은 설정하지 않아도 된다.

`reduce`의 이전 콜백의 반환값과 배열 요소의 값과 Math.min을 이용해서 제일 작은 값을 구한다.

이후 `filter`를 사용해서 작은 수와 일치하지 않을 경우에 배열에 들어갈 수 있도록 한다.
이 경우 제일 작은 수가 중복되어 존재할 때 발생하는 문제를 해결할 수 있다.

#### 3. sort((a,b)=> a-b) -오름차순

```js
unction solution(arr) {
    var answer = [];
    if(arr.length===1) return [-1];
    var temp = []
    for(var data of arr) {
        temp.push(data);
    }
    arr = arr.sort(function(a,b){return b-a;});
    for(var i=0 ; i<temp.length; i++) {
        if(temp[i] !== arr[arr.length-1]) {
            answer.push(temp[i]);
        }
    }
    return answer;
}
```

작은 수를 구하는 방법으로 `sort`를 사용해서 내림차순으로 정렬한뒤 제일 작은 수가 아닌 경우 answer에 넣어준다.

1. 오름차순: points.sort((a, b) => a - b);
   비교 함수의 반환값이 0보다 작은 경우, a를 우선하여 정렬한다.
2. 내림차순: points.sort((a, b) => b - a);
   비교 함수의 반환값이 0보다 큰 경우, b를 우선하여 정렬한다.

## Math.min()

정적 메소드
[Math.min](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/min)

Math.min() 함수는 주어진 숫자들 중 가장 작은 값을 반환합니다.

1개 이상의 인자값이 숫자형으로 변환이 불가능 한 경우 NaN을 반환합니다.

> 항상 기준 보다 작거나 같은 값으로 제한하는 용도로 사용

```js
let x = f(foo);
if (x > boundary) {
  x = boundary;
}
// ===
let x = Math.min(f(foo), boundary);
```

f(foo) 자리에 배열이 들어갈 수는 없음.

## array.splice()

[splice MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
`splice`는 배열에서 특정항목을 제거할 때 사용하는 것이 일반적이지만 `splice`를 이용해서 원하는 위치에 추가할 수도 있습니다.

기본적으로

```js
array.splice(index, n);
```

을 기본 형식으로 index의 위치에서 n개를 삭제하겠다는 의미로 사용됩니다.

```js
array.splice(index, n, item);
```

뒤에 하나의 인자가 더 붙는다면 index 위치에서 n개를 삭제하고 item을 추가하겠다는 의미로 사용됩니다.
아무것도 삭제하고 싶지 않다면 n을 0으로 작성합니다.
