function lengthOfLastWord(text) {
    let trimText = text.trim()
    let lastWord = trimText.split(" ")
    let lastWordLength = lastWord.slice(-1).pop().length
    return lastWordLength
}
console.log(lengthOfLastWord("   fly me   to   the moon  "));