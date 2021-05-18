function isPrime(num) {
    if (num < 2) return false;
    let root = Math.ceil(Math.sqrt(num));
    for (let index = 2; index <= root; index++) {
        if (num % index === 0) return false
    }
    return true
}
//false
console.log(isPrime(8));
//true
console.log(isPrime(11));
//false
console.log(isPrime(121));
//true
console.log(isPrime(127));