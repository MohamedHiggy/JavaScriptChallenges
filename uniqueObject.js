let products = [
    { title: "Iphone 8", company: "apple" },
    { title: "Iphone 6", company: "apple" },
    { title: "Oppo A92", company: "oppo" },
    { title: "Galaxy", company: "samsung" },
    { title: "HTC phone", company: "htc" },
    { title: "Iphone 11 pro", company: "apple" },
];

function getUnique(arr) {
    /* let newArr = arr.map((item) => item.company);
    return [...new Set(newArr)]; */

    return [...arr.reduce((acc, curr) => {
        acc.add(curr.company)
        return acc
    }, new Set())]
}
console.log(getUnique(products));