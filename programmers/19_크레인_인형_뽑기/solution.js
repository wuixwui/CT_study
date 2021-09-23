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
