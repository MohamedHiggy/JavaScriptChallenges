/**
 * truncateAstring
 * ex: 
 * str = Lorem ipsum dolor sit amet consectetur adipisicing elit
 * num = 11
 * result : Lorem ipsum ...
 */

// === first solution === //
/* function truncateAstring(str, num) {
    if (num <= 3) {
        return str.slice(0, num) + '...'
    }
    return str.slice(0, num - 3) + '...'
} */


// === second solution === //
function truncateAstring(str, num) {
    if (num >= str.length) return str
    if (num <= 3) return str.slice(0, num) + '...'
    return str.slice(0, num - 3) + '...'
}
console.log(truncateAstring("Lorem ipsum dolor sit amet consectetur adipisicing elit", 11));