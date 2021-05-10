/**
 * whereDoiBelong
 * ex: ([40, 60], 50)
 * result 1 cause 50 between 40 and 60
 * 
 * ex: ([40, 50,60,80], 55)
 * result 2 cause 55 between 50 and 60
 * 
 * ex: ([2, 5,10], 15)
 * result 3 cause 15 > lastIndex
 */

function whereDoiBelong(arr, num) {
    let newArrSortly = arr.sort((a, b) => {
        return a - b
    })
    for (let index = 0; index < newArrSortly.length; index++) {
        if (num <= newArrSortly[index]) {
            return index
        }
    }
    // if I do not type this line it will execute undefined =>
    return arr.length
}
console.log(whereDoiBelong([2, 5, 10], 15));