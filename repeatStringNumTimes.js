/**
 * repeatStringNumTimes 
 * ex: 
 * ("abc", 3) => abcabcabc
 * 
 */
// === first solution === //
/* function repeatStringNumTimes(str, num) {
    let total = ""
    if (num < 0) {
        return "";
    }
    total = str.repeat(num)
    return total
} */


// === second solution === //
/* function repeatStringNumTimes(str, num) {
    let total = ""
    if (num < 0) return "";
    for (let index = 0; index < num; index++) {
        total = total + str
    }
    return total
} */

// === third solution with recurion "function calling itself" === //
function repeatStringNumTimes(str, num) {
    if (num < 0) return "";
    if (num === 1) return str;
    return str + repeatStringNumTimes(str, num - 1)
}
console.log(repeatStringNumTimes("abc", 3));