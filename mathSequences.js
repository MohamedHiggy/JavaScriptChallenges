function mathSequences(arr) {
    let arithmetic = new Set();
    let geometric = new Set();
    for (let index = 1; index < arr.length; index++) {
        let arith = arr[index] - arr[index - 1];
        arithmetic.add(arith);

        let geo = arr[index] / arr[index - 1];
        geometric.add(geo)
    }
    return arithmetic.size === 1 ? "Arithmetic" : geometric.size === 1 ? "Geometric" : -1
}
//Arithmetic
console.log(mathSequences([2, 4, 6, 8])); // 2 + 2 = 4; 4 + 2 = 6; 6 + 2 = 8
//Geometric
console.log(mathSequences([3, 9, 27])); // 3 * 3 = 9; 9 * 3 = 27; 
//-1
console.log(mathSequences([2, 5, 14, 89]));