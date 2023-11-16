function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    if (number <= 3) {
        return true;
    }
    if (number % 2===0){
        return false;
    }
    for (let i = 3; i <= Math.sqrt(number); i+=2) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));
console.log(isPrime(3571));
console.log(isPrime(12778283));