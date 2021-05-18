/**
 * titlecase
 * ex:  
 *      lorem ipsum dolor sit amet consectetur adipisicing elit Culpa veniam
 *      Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Culpa Veniam
 */

// === first solution ===//

/* function titlecase(str) {
    let string = str.toLowerCase().split(" ");
    for (let index = 0; index < string.length; index++) {
        string[index] = string[index][0].toUpperCase() + string[index].slice(1)
    }
    return string.join(" ")
} */

// === second solution ===//
/* function titlecase(str) {
    let string = str.toLowerCase().split(" ").map(function(e) {
        return e[0].toUpperCase() + e.slice(1);
    });
    return string.join(" ")
} */

// === third solution ===//
/* function capitalLetter(str) {
    let newVar = str.split(" ").map(e => {
        let firstLetter = e.slice(0, 1).toUpperCase()
        let reset = e.slice(1);
        return `${firstLetter}${reset}`;
    });
    return newVar.join(" ");
} */

// === fourth solution ===//
function capitalLetter(str) {
    let newVar = str.split(" ").map(e => {
        return e.charAt(0).toUpperCase() + e.slice(1)
    });
    return newVar.join(" ");
}
console.log(titlecase("Lorem ipsum dolor sit amet consectetur adipisicing elit Culpa veniam"));