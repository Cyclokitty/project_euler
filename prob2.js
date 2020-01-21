function fiboEvenSum(n) {
    let fibArr = fibo(n);
    let counter = 0;
    for (let i = 0; i < fibArr.length; i++) {
        if (fibArr[i] % 2 == 0) {
        counter += fibArr[i];
        }
    }
    console.log(fibArr.length)
    return counter;
}

    function fibo(n) {
    let arr = [0, 1];
    for (let i = 0; i < n; i++) {
        arr.push(arr[i] + arr[i + 1]);
    }
    console.log(arr);
    return arr;
}