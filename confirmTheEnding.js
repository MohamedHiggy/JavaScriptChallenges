/**
 * check the end like 
 * "veniam" end with "m" true
 * "veniam" end with "s" false
 * "Lorem ipsum dolor" end with "dolor" true
 * "Lorem ipsum dolor" end with "r" true
 * 
 * substring(indexStart, indexEnd) / substr(start, length)
 */

// === first solution === //
/* function confirmTheEnding(str, target) {
    if (str.endsWith(target)) {
        return true;
    }
    return false;
} */

// === second solution === //
function confirmTheEnding(str, target) {
    if (str.substr(-target.length) === target) {
        return true;
    }
    return false;
}
console.log(confirmTheEnding("Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, veniam", "veniam"));