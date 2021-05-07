/*
 * SeekAndDestroy
 * ex: ([7, 9, 5, 4, 3, 1], 2, 3)
 * return [7, 9, 5, 4, 1]
 * ex: ([7, 9, 5, 4, 3, 1], 7, 9)
 * return [5, 4, 3, 1]
 */

// ==== first solution === //
/* function seekAndDestroy(arr) {
    let newArr = [...arguments]
    let arg = newArr.slice(1)
    let final = []
    for (const iterator of arr) {
        if (arg.indexOf(iterator) === -1) {
            final.push(iterator)
        }
    }
    return final
} */

// ==== second solution === //
/* function seekAndDestroy(arr) {
    let newArr = [...arguments]
    let arg = newArr.slice(1)
    return arr.filter((e) => {
        return arg.indexOf(e) === -1
    })
} */

// ==== third solution === //
function seekAndDestroy(arr) {
    let newArr = [...arguments]
    let arg = newArr.slice(1)
    return arr.filter((e) => {
        return !arg.includes(e)
    })
}

console.log(seekAndDestroy([7, 9, 5, 2, 4, 3, 1], 2, 3));