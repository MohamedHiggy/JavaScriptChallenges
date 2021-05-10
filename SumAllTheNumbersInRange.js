/**
 * Sum All The Numbers In Range
 * ex: [1, 4]
 * result should retunr a number is 1+2+3+4 = 10
 */

function sumAll(arr) {
    let start = Math.min(arr[0], arr[1])
    let end = Math.max(arr[0], arr[1])
    let total = 0
    for (let index = start; index <= end; index++) {
        total = total + index
    }
    return total
}
console.log(sumAll([1, 4]));