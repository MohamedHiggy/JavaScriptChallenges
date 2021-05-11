/**
 * caesarsCipher
 * ex: ("SERR PBQR PNZC")
 * if S is given you have to return f cause s + 13 char = f
 * 
 *  let ENGLISH = "abcdefghijklmnopqrstuvwxyz".split("");
 */

function caesarsCipher(str) {
    let result = ""
    for (let index = 0; index < str.length; index++) {
        var numValue = str[index].charCodeAt();
        //In asci A = 65, Z = 90, a = 97 and z = 122
        if (numValue >= 65 && numValue <= 77) {
            result += String.fromCharCode(numValue + 13)
        } else if (numValue >= 78 && numValue <= 90) {
            result += String.fromCharCode(numValue - 13)
        } else {

            result += str[index]
        }
    }
    return result
}
console.log(caesarsCipher("SERR PBQR PNZC"));