/**
 * Reverse text
 * ex: 
 * ("hello") -> ("olleh")
 * 
 */

// ====first solution ==== //
/* function revers(str) {
    let string = [...str].reverse().join("")
    return string
} */

// ==== second solution ==== //
function revers(str) {
    let string = ""
    for (let index = str.length - 1; index >= 0; index--) {
        string = string + str[index]
    }
    return string
}
console.log(revers("hello"));