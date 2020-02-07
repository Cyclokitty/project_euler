// import big.js library
function powerDigitSum(exponent) {
    let powerDigit = Big(2);  
    let digitSum = powerDigit.pow(exponent);
    let sum = digitSum.c.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    return sum;
  }
  
  powerDigitSum(1000);