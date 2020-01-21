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

    //console.log(isPrime(5));

function largestPrimeFactor(number) {
    // check if number is already prime
    if (isPrime(number)) return number;

    // otherwise test number..
    let factorList = [];
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            let divisor = i;
            if (isPrime(divisor)) {
                factorList.push(divisor);
            }
            let result = number / divisor;
            if (isPrime(result)) {
                factorList.push(result);
            }
        }
    }
    return Math.max(...factorList);
}