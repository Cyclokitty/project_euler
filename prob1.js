function multiplesOf3and5(number) {
    let sum = 0;
    let count = 1;

    while (count < number) {
        if (count % 3 === 0 || count % 5 === 0) {
        sum += count;
    }
    count++;
}

    return sum;
}