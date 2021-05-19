//return first word with greatest number of repeated letters
function countLetters(str) {
    let amount = 1;
    let word = "";
    let newArr = str.split(" ");
    newArr = newArr.map(item => {
        let newItem = item.toLowerCase().split("")
        return newItem.reduce((acc, curr) => {
            acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
            if (acc[curr] > acc.max) {
                acc.max = acc[curr]
            }
            return acc
        }, { max: 1, word: item })
    });
    for (const iterator of newArr) {
        if (iterator.max > amount) {
            amount = iterator.max
            word = iterator.word
        }
    }
    if (amount > 1) {
        return word
    }
    return -1;
}
console.log(countLetters("Loremmm ipsumdolor dolor sit amet"));