function secondValue(arr) {
    let filterArr = [...new Set(arr)]
    let newArr = filterArr.sort((a, b) => {
        return a - b
    })
    if (newArr.length < 2) {
        return `${newArr[0]}`
    } else if (newArr.length === 2) {
        return `${newArr[0]} - ${newArr[1]}`
    } else {
        return `${newArr[1]} ${newArr[newArr.length - 2]}`
    }
}
//return 1
console.log(secondValue([1]));
//return 2 4
console.log(secondValue([4, 2]));
//return 11 , 22 , 44 === 22
console.log(secondValue([11, 44, 22]));
//return -11 , 2 ,3 ,7 ,67 ,88 === 2, 67
console.log(secondValue([3, 2, 88, 3, -11, 67, 7]));