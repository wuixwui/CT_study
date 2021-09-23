function solution(n, lost, reserve) {
  lost.sort((x, y) => x - y);
  reserve.sort((x, y) => x - y);

  let need = lost.filter((item) => !reserve.includes(item));
  let rent = reserve.filter((item) => !lost.includes(item));

  rent.forEach(function (item) {
    for (let i = 0; i < need.length; i++) {
      if (item + 1 === need[i] || item - 1 === need[i]) {
        need.splice(i, 1);
      }
    }
  });

  return n - need.length;
}
