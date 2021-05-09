/*
 *Write a function to return missing numbers from an unsorted array
 *of numbers that may contain duplicates. 
 *For example: findMissingNums([5, 3, 2, 8, 5]) should return [4, 6, 7]
 */


// === first Soultion === //
/* function findMissingNums(arr) {
    let newArr = []
    arr.sort((a, b) => a - b)
    for (let index = 0; index < arr.length; index++) {
        const result = arr[index + 1] - arr[index]
        if (result > 1) {
            for (let y = 1; y < result; y++) {
                newArr.push(arr[index] + y)
            }
        }
    }
    console.log(newArr);
    return newArr;
} */

// === second Soultion === //
function findMissingNums(arr) {
    let newArr = []
    arr.sort((a, b) => a - b)
    for (let index = arr[0]; index < arr[arr.length - 1]; index++) {
        if (!arr.find(currentNum => currentNum === index)) {
            newArr.push(index)
        }
    }
    console.log(newArr);
    return newArr;
}

findMissingNums([5, 3, 2, 8, 5])