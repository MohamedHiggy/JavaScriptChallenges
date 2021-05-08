/*
 *Write a function that takes an argument of string and returns
 *true, or false according to the string being palindrome or not.
 *Take into consideration that spaces count, while punctuation doesn't.
 *For example: palindrome("Dad") return true
 * palindrome("code") return false
 */

// ==== First solution ==== //
/* function palindrome(str) {
    let arr = [...str].reverse().join("")
    let result = arr.toLowerCase() === str.toLowerCase();
    return result
} */

// ==== Second solution ==== //
/* function palindrome(str) {
    let arr = [...str].reduce((accumulator, current) => {
        return current + accumulator
    })
    let result = arr.toLowerCase() === str.toLowerCase();
    return result
} */


// ==== Third solution ==== //
/* function palindrome(str) {
    let arr = [...str];
    let result = arr.every((element, index) => {
        return element.toLowerCase() === arr[arr.length - index - 1].toLowerCase()
    })
    return result
} */