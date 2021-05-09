/**
 * diffArray 
 * ex: [1, 2, 3, 5], [1, 2, 3, 4, 5]
 * return [4] unique number
 */

// === first solution === //
/* function diffArray(arr1, arr2) {
    let result = [];
    for (let index = 0; index < arr1.length; index++) {
        if (arr2.indexOf(arr1[index]) === -1) {
            result.push(arr1[index])
        }
    }
    for (let j = 0; j < arr2.length; j++) {
        if (arr1.indexOf(arr2[j]) === -1) {
            result.push(arr2[j])
        }
    }
    return result
}
 */

// === second solution === //
function diffArray(arr1, arr2) {
    let addTwoArr = [...arr1, ...arr2]
    return addTwoArr.filter(e => {
        if (arr1.indexOf(e) === -1 || arr2.indexOf(e) === -1) {
            return e
        }
    })
}
console.log(diffArray([1, 2, 3, 5, 10], [1, 2, 3, 4, 5]));