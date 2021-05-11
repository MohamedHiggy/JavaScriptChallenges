/*Write a function that takes 2 arguments. The first one is
 *an array and the second one is a number (chunk size).
 *The function should return an array of array chunks inside
 *with each array length is equal to the number (chunk size).
    _______Examples_____
*chunk([1,2,3,4,5], 2) //return [[1,2], [3,4], [5]]
*chunk([3,7,8,1,2,4,10,13,12], 3) //return [[3,7,8], [1,2,4], [10,13,12]]
*chunk([1,2,3,4,5], 8) //return [[1,2,3,4,5]]

*/

// ==== first solution === //
/* function chunked(arr, size) {
    let newArray = []
    for (const item of arr) {
        if (!newArray.length || newArray[newArray.length - 1].length === size) {
            newArray.push([item])
        } else {
            newArray[newArray.length - 1].push(item)
        }
    }
    console.log(newArray);
    return newArray

} */

// ==== second solution === //
/* function chunked(arr, size) {
    let newArray = []
    for (let index = 0; index < arr.length; index += size) {
        newArray.push(arr.slice(index, index + size))
    }
    console.log(newArray);
    return newArray

} */


// ==== third solution === //
/* function chunked(arr, size) {
    let newArray = []
    while (arr.length > 0) {
        newArray.push(arr.slice(0, size))
        arr = arr.slice(size)
    }
    return newArray
} */

// ==== fourth solution === //
/* function chunked(arr, size) {
    let newArray = []
    while (arr.length > 0) {
        newArray.push(arr.slice(0, size))
        arr = arr.slice(size)
    }
    return newArray
} */

// ==== fifth solution === //
//hint : the diffrence between splice and slice is splice take the num of size and remove from main array but slice do the same but not remove from main array
function chunked(arr, size) {
    let newArray = []
    while (arr.length > 0) {
        newArray.push(arr.slice(0, size))
        arr = arr.slice(size) //to remove the size form main array
    }
    /* while (arr.length > 0) {
        newArray.push(arr.splice(0, size))
    } */
    return newArray
}
console.log(chunked([3, 7, 8, 1, 2, 4, 10, 13, 12], 3));