function isPrime(num) {
    let sqrtNum = Math.floor(Math.sqrt(num));
    let prime = num != 1;
    for (let i = 2; i < sqrtNum + 1; i++) {
      if (num % i == 0) {
        prime = false;
        break;
      }
    }
    return prime;
  }
  
  function nthPrime(n) {
    let counter = 0;
    let goalN = 0;
    let start = 2;
    while (counter < n) {
      if (isPrime(start)) {
        goalN = start;
        counter++;
      }    
      start++;
    }
    return goalN;
  }
  
  nthPrime(10001);