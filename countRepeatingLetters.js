function countRepeat(str) {
    let newStr = [...str];
    let letters = [];
    let count = 1;

    for (let index = 0; index < newStr.length; index++) {
        if (newStr[index] === newStr[index + 1]) {
            count++;
        } else {
            let value = `${count}${newStr[index]}`
            letters = [...letters, value];
            count = 1;
        }
    }
    return letters.join("")
}
console.log(countRepeat("yyyyttttccccffffaaacccdddgggaaa"));