/**
 * mutations
 * 
 * ex: (["hello", "hey"])
 * result false cause hey not = hel
 * ex: (["hello", "hel"])
 * result true
 */

// === solution one === //
/* function mutations(arr) {
    let firstWord = arr[0].toLowerCase()
    let secondWord = arr[1].toLowerCase()
    for (let index = 0; index < secondWord.length; index++) {
        if (firstWord.indexOf(secondWord[index]) === -1) {
            return false
        }
    }
    return true
} */

// === solution two === //
function mutations(arr) {
    let firstWord = arr[0].toLowerCase()
    let secondWord = arr[1].toLowerCase()
    for (let index = 0; index < secondWord.length; index++) {
        if (!firstWord.includes(secondWord[index])) {
            return false
        }
    }
    return true
}


console.log(mutations(["hello", "hel"]));