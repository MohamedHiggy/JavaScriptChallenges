/**
 * Factorialize 
 * ex: 
 * 5! = 1 * 2 * 3 * 4 * 5 = 120
 */

function factorialize(num) {
    let sum = 1;
    for (let index = 1; index <= num; index++) {
        sum = sum * index
    }
    return sum
}
console.log(factorialize(6));