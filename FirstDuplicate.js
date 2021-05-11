/*Write a function that takes an argument of an array of
 *numbers and returns the first duplicate.
 *Example: findFirstDupl([2, 4, 5, 1, 3, 5, 4]) returns 4
 */

// === first solution === //

/* function FirstDuplicate(arr) {
    let numbers = {}
    let minIndex = arr.length
    for (let i = 0; i < arr.length; i++) {
        if (!numbers[arr[i]]) {
            numbers[arr[i]] = {
                count: 1,
                index: i
            }
        } else {
            numbers[arr[i]]["count"]++
        }
    }
    //(for in loop)loop in key / (for of loop)loop of value
    for (const number in numbers) {
        if (numbers[number]["count"] === 2) {
            if (numbers[number]["index"] < minIndex) {
                minIndex = numbers[number]["index"]
            }
        }
    }
    return arr[minIndex]
} */

// === Second solution === //
function FirstDuplicate(arr) {
    for (let num of arr) {
        dupNumbers = arr.filter(value => value == num);
        if (dupNumbers.length > 1) return num;
    }
}
console.log(FirstDuplicate([2, 5, 4, 5, 1, 3, 5, 4]));