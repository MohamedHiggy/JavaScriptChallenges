/**
 * Find Longest Word in text
 */
// solution one
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

// solution two
function findLongestWrod(str) {
    let words = str.split(" ");
    let size = 0;
    let max = [""];
    for (let index = 0; index < words.length; index++) {
        if (words[index].length >= size) {
            size = words[index].length;
            if (max[max.length - 1].length < words[index].length) {
                max = [];
                max.push(words[index])
            } else {
                max = [...max, words[index]];
            }
        }
    }
    return max
}
console.log(findLongestWrod("i woke up early today"));
console.log(findLongestWrod("Lorem ipsum dolossr sit amet"));