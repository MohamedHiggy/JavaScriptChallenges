/**
 * slasher flick
 * 
 * takes array [1,2,3]
 * secind param determins how many items should you delete
 * ex: ([1,2,3], 2)
 * result [3]
 * ex: ([1,2,3], 0)
 * result [1,2,3]
 */

// === solution one === //
/* function slasher(arr, howMany) {
    let result = arr.splice(0, howMany)
    return result
} */

// === solution two === //
function slasher(arr, howMany) {
    if (howMany >= arr.length) {
        return []
    } else {
        for (let index = 0; index < howMany; index++) {
            arr.shift()
        }
        return arr
    }
}

console.log(slasher([1, 2, 3], 2));