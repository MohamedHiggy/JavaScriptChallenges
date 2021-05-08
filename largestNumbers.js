/**
 * return largest num in each array ex: 
 * [[4, 5, 6, 8], [2, 10, 3, 88], [2, 4, 0, 78], [4, 5, 6, 98],[74, 35, 46, 28]]
 * return [8,88,78,98,74]
 */

// === first solution === //
/* function largestNum(arr) {
    let allLargestNum = []
    for (let index = 0; index < arr.length; index++) {
        let temp = arr[index][0]
        for (let y = 0; y < arr[index].length; y++) {
            let current = arr[index][y]
            if (current >= temp) {
                temp = current
            }
        }
        allLargestNum.push(temp)
    }
    return allLargestNum
} */

// === second solution === //
/* function largestNum(arr) {
    let allLargestNum = [0, 0, 0, 0]
    for (let index = 0; index < arr.length; index++) {
        for (let y = 0; y < arr[index].length; y++) {
            let current = arr[index][y]
            if (current >= allLargestNum[index]) {
                allLargestNum[index] = current
            }
        }
    }
    return allLargestNum
} */

// === third solution === //
function findLarge(arr) {
    var max = arr[0]
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > max) {
            max = arr[index]
        }
    }
    return max
}

function largestNum(arr) {
    let allLargestNum = [];
    for (let index = 0; index < arr.length; index++) {
        let max = findLarge(arr[index])
        allLargestNum.push(max)
    }
    return allLargestNum
}

console.log(largestNum([
    [4, 5, 6, 8],
    [2, 10, 3, 88],
    [2, 4, 0, 78],
    [4, 5, 6, 98],
    [74, 35, 46, 28]
]));