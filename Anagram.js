/*
 *Write a function that takes 2 string arguments and check if 
 *the 2 strings are anagrams to each other (have the same characters
 * with the same quantity). Consider only characters not spaces, or
 * punctuations.
 *Example: anagram('Ab bc', 'cbab'); // return true
 *Example: anagram('abbc', 'cba'); // return false
 *Example: anagram('abbc?!', 'cbab'); // return true
 */


// === solution one === //
/*function cleanString(str) {
    return str.replace(/[^\w]|_/g, "")
        .toLowerCase()
        .split("")
        .sort()
        .join()
}

 function anagram(str1, str2) {
    console.log(cleanString(str1) === cleanString(str2));
    return cleanString(str1) === cleanString(str2)
} */

// === solution two === //
function buildCharMap(str) {
    let charMap = {}
    let cleanedStr = str.replace(/[^\w]|_/g, "").toLowerCase()
    for (const iterator of cleanedStr) {
        if (!charMap[iterator]) {
            charMap[iterator] = 1
        } else {
            charMap[iterator] += 1
        }
    }
    return charMap
}

function anagram(str1, str2) {
    const charMap1 = buildCharMap(str1)
    const charMap2 = buildCharMap(str2)
    if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
        return false
    }
    for (const key in charMap1) {
        if (charMap1[key] !== charMap2[key]) {
            return false
        }
    }
    return true
}
console.log(anagram('abbc', 'cba'));