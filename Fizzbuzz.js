/*Write a function that takes an argument of n number and print 
 *the numbers from 1 to n, with exceptions:
 *if numbers which are multiplies of 3 print fizz instead
 *if numbers which are multiplies of 5 print buzz instead
 *and finally if numbers are multiplies of both 3, and 5 
 *print fizzbuzz.*/

function fizzbuzz(num) {
    for (let index = 1; index <= num; index++) {
        if (index % 3 === 0 && index % 5 === 0) {
            console.log("fizzbuzz");
        } else if (index % 3 === 0) {
            console.log("fizz");
        } else if (index % 5 === 0) {
            console.log("buzz");
        } else {
            console.log(index);
        }
    }

}
console.log(fizzbuzz(15));