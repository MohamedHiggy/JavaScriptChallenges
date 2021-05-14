/**
 * Write a function to determine the largest difference 
 * between any two numbers in an array of numbers
 */

let numbers = [12, 2, 6, 5, 5, 5, 9, 9, 9, 6, 6, 10, 33];

let difference = (function(arr) {
    //remove all duplicates with set
    let newSet = new Set(arr);
    let newArr = [...newSet];
    /*
     * or can i make it in one like but i like spread operator
     * let newArr = Array.from(new Set(arr));
     * [12,  2,  6, 5, 9, 10, 33 ]
     * [10, 12, 2, 33, 5, 6, 9]
     * [33, 12, 10, 9, 6, 5, 2]
     */
    //if i make newArr.sort() like that it will sort but sort by first num not the main number 
    //ex: newArr.sort() => [10, 12, 2, 33, 5, 6, 9]
    //ex: newArr.sort((a, b) => { return b - a }); => [33, 12, 10, 9, 6, 5, 2]
    let sortArr = newArr.sort((a, b) => b - a);
    return sortArr[0] - sortArr[sortArr.length - 1]
})(numbers);

console.log(difference);