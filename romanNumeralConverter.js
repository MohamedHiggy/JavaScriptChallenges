/**
 *  Roman Numeral Converter
 */
function convert(num) {
    let romanToNum = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };
    let letter = "";
    for (const key in romanToNum) {
        while (num >= romanToNum[key]) {
            letter += key
            num -= romanToNum[key]
        }
    }
    return letter
}
console.log(convert(3));