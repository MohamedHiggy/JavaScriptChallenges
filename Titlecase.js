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
function titlecase(str) {
    let string = str.toLowerCase().split(" ").map(function(e) {
        return e[0].toUpperCase() + e.slice(1);
    });
    return string.join(" ")
}
console.log(titlecase("Lorem ipsum dolor sit amet consectetur adipisicing elit Culpa veniam"));