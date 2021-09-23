function solution(scores) {
  const result = [];
  for (let i = 0; i < scores.length; i++) {
    let min = scores[0][i];
    let max = scores[0][i];
    let minCount = 1;
    let maxCount = 1;

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

    let total = 0;
    for (let j = 0; j < scores.length; j++) {
      total += scores[j][i];
    }

    if (scores[i][i] === min && minCount === 1) {
      const sum = total - min;
      const score = sum / (scores.length - 1);
      result.push(score);
      continue;
    }
    if (scores[i][i] === max && maxCount === 1) {
      const sum = total - max;
      const score = sum / (scores.length - 1);
      result.push(score);
      continue;
    }
    result.push(total / scores.length);
  }

  return result
    .map((score) =>
      score >= 90
        ? 'A'
        : score >= 80
        ? 'B'
        : score >= 70
        ? 'C'
        : score >= 50
        ? 'D'
        : 'F'
    )
    .join('');
}
