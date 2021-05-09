/**
 * Find Longest Word in text
 */

/* (function findLongestWrod(str) {
    let words = str.split(" ")
    let longestWord = ""
    for (let index of words) {
        if (index.length > longestWord.length) {
            longestWord = index
        }
    }
    console.log("the Longest Word is " + longestWord + "and it's length is " + longestWord.length);
    return longestWord
})("Lorem ipsum dolossr sit amet") */

function findLongestWrod(str) {
    return str.split(" ").sort(function(a, b) {
        return b.length - a.length;
    })
}
console.log(findLongestWrod("Lorem ipsum dolossr sit amet"));