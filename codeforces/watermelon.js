function watermelon(num) {
    if (num > 0 && num % 2 === 0 && num > 2) {
        return "YES"
    } else {
        return "NO"
    }
}

console.log(watermelon(8));