// import big.js library
function sumFactorialDigits(n) {
    let factorial = Big(1);
    for (let i = n; i > 1; i--) {
      factorial = factorial.times(i);
    }
    return factorial.c.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  }
  
  sumFactorialDigits(100);