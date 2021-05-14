/**
 * Write a script that will find all the vowels [a,e,i,o,u] inside any string
 * and then flip the order of only the vowels. If there is an odd number of vowels
 * then the one in the middle stays in the same position. Complete this task with the
 * fewest number of loops and iterations as possible.
 * Eg:
 * cottage => cettago
 * hello => holle
 * sauce => seuca
 * javascript => jivascrapt
 */
//solution one
/* 
let process = word => {
    let matches = Array.from(word).reduce((acc, curr, idx) => {
        if (["a", "e", "i", "o", "u"].includes(curr)) {
            acc.push(idx);
        }
        return acc;
    }, []);
    log(matches); //positions of the vowels
    let len = matches.length;
    let wordCopy = Array.from(word);
    for (let i = 1; i <= len / 2; i++) {
        let ltr = word.substring(matches[len - i], matches[len - i] + 1);
        let removed = wordCopy.splice(matches[i - 1], 1, ltr);
        wordCopy.splice(matches[len - i], 1, removed[0]);
        word = wordCopy.join("");
    }
    return word;
}; */

//solution two
let process = str => {
    const regex = /[aeiou]/g;
    let modified = str.split('');
    let vowels = str.match(regex);

    modified.forEach((char, i) => {
        // Handle vowels only
        if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
            modified[i] = vowels.pop();
        }
    });
    return modified.join('');
}

console.log(process("javascript"));
console.log(process("hello"));