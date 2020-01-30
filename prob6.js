function sumSquareDifference(n) {
  let naturalNums = [];
  for (let i = 1; i <= n; i++) {
    naturalNums.push(i);
  }

  let sumSquares = naturalNums.reduce((acc, curr) => {
    let squaredCurr = Math.pow(curr, 2);
    return acc + squaredCurr;
  }, 0);

  let squaredSum = Math.pow(naturalNums.reduce((acc, curr) => {
    return acc + curr;
  }, 0), 2);

  return squaredSum - sumSquares;  
}
