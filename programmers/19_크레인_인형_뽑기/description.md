# 프로그래머스

## [크레인 인형뽑기 게임](https://programmers.co.kr/learn/courses/30/lessons/64061)

---

### 이해

moves의 순서에 따라 크레인을 작동 시킨 후 같은 인형(숫자)를 만나 사라진 인형(숫자)의 개수를 반환하기.

### 계획

board `[[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]`

- 이차원 배열 board가 쌓이는 형태를 알아본다.
  > ```
  > [00000]
  > [00103]
  > [02501]
  > [42442]
  > [35131]
  > ```

마지막에 위치한 배열부터 밑으로 쌓이는 형태로 바구니의 인형 위치가 만들어진다.

- board 배열을 뒤에서 부터 돌면서 인덱스에 맞는 숫자를 뽑아서 각 인덱스 위치에 맞는 숫자끼리 들어가 있는 새로운 이차원 배열 newBoard를 만든다.

  > newBoard 예상
  > `[[3,4],[5,2,2],[1,4,5,1],[3,4][1,2,1,3]]`

- newBoard의 배열은 앞에서 부터 순서대로 크레인 작동 위치 순서를 나타내며, 해당 배열의 배열은 앞에서 부터 바닥에 가까운 숫자이다.

- moves를 받아 newBoard의 배열로 이동하는 index 숫자로 사용하며 해당 배열의 마지막 숫자를 빼온다.
  - 이때, answer에 들어가 있는 숫자가 있다면 새로 들어올 숫자와 비교한다.
    - answer의 마지막 숫자와 새로 넣을 숫자가 갖다면 answer의 마지막 숫자를 제거하고 result에 2를 더해준다.
    - answer의 마지막 숫자와 새로 넣을 숫자가 같지 않다면 새로 넣을 숫자를 answer에 추가해준다.
- moves를 돈 뒤 result를 반환한다.

### 실행

```jsx
function solution(board, moves) {
  let answer = [];
  let result = 0;
  let newBoard = [];
  let size = board.length;

  for (let i = 0; i < size; i++) {
    newBoard.push([]);
    for (let j = size - 1; j >= 0; j--) {
      if (board[j][i] !== 0) {
        newBoard[newBoard.length - 1].push(board[j][i]);
      }
    }
  }

  moves.forEach((item) => {
    let tmp = newBoard[item - 1].pop();
    let lastNum = answer[answer.length - 1];
    if (lastNum >= 0 && lastNum === tmp) {
      answer.pop();
      result += 2;
    } else {
      answer.push(tmp);
    }
  });

  return result;
}
```

### 회고

```jsx
for (var i = 0; i < moves.length; i++) {
  var now = moves[i] - 1;
  for (var j = 0; j < board.length; j++) {
    if (board[j][now] != 0) {
      if (stack[stack.length - 1] === board[j][now]) {
        stack.pop();
        count += 2;
      } else {
        stack.push(board[j][now]);
      }
      board[j][now] = 0;
      break;
    }
  }
}
return count;
```

moves를 비교하면서 한번에 처리
