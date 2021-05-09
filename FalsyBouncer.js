/*
 * ex: [7, "ate", "", false, 9]
 * return [7, "ate", 9]
 * ex: [false, null, 0, NaN, "", undefined]
 * return []
 * in js has falsy values : false, null, 0, NaN, "", undefined
 */

// ==== first solution === //
/* function falsyBouncer(arr) {
    let result = []
    for (let index = 0; index < arr.length; index++) {
        if (arr[index]) {
            result.push(arr[index])
        }
    }
    return result
} */

// ==== second solution === //
function falsyBouncer(arr) {
    return arr.filter((e) => {
        return e
    })

}

console.log(falsyBouncer([7, "ate", "", false, 9]));