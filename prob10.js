const isPrime = num => {
    const sqrtNum = Math.floor(Math.sqrt(num));
    let prime = num != 1;
    for (let i = 2; i < sqrtNum + 1; i++) {
        if (num % i === 0) {
            prime = false;
            return false;
        } 
    }
    return num
}

function primeSummation(n) {
  let counter = 2;
  let product = 0;
  while (counter < n) {
    if (isPrime(counter)) {
      product += counter;
    }
    counter++;
  }
  return product;
}

primeSummation(2000000);