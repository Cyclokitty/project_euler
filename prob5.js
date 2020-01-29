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

function smallestMult(n) {
  // create prime number array
  let primeArray = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primeArray.push(i);
    }
  }

  let extendPrime = [...primeArray];
  for (let i = 0; i < primeArray.length; i++) {
    let counter = 2;
    let test = Math.pow(primeArray[i], counter)
    while (test <= n) {
      extendPrime.push(primeArray[i]);
      counter++;
      test = Math.pow(primeArray[i], counter);
    }
  } 

  let product = extendPrime.reduce((acc, curr) => {
    return acc * curr;
  }, 1);
  return product;
}

smallestMult(10);