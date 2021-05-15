//basic example
/* const staff = [
    { name: 'bob', age: 20, position: 'developer', salary: 100 },
    { name: 'peter', age: 25, position: 'designer', salary: 300 },
    { name: 'susy', age: 30, position: 'the boss', salary: 400 },
    { name: 'anna', age: 35, position: 'intern', salary: 10 },
];

const newArr = staff.reduce((total, current) => {
    //total = 0
    //current = 100, 300, 400, 10
    return total += current.salary
}, 0)
console.log(newArr); */

//Reduce (object example)
// cart example
const cart = [{
        title: 'Samsung Galaxy S7',
        price: 599.99,
        amount: 1,
    },
    {
        title: 'google pixel ',
        price: 499.99,
        amount: 2,
    },
    {
        title: 'Xiaomi Redmi Note 2',
        price: 699.99,
        amount: 4,
    },
    {
        title: 'Xiaomi Redmi Note 5',
        price: 399.99,
        amount: 3,
    },
];

let { totalItems, cartTotal } = cart.reduce((total, cartItem) => {
    const { amount, price } = cartItem;
    //count items
    total.totalItems += amount;
    //count sum
    total.cartTotal += amount * price;
    return total
}, {
    totalItems: 0,
    cartTotal: 0
});
cartTotal = parseFloat(cartTotal.toFixed(2));
console.log(totalItems, cartTotal);

const url = 'https://api.github.com/users/john-smilga/repos?per_page=100'
const fetchRepos = async() => {
    const res = await fetch(url);
    const data = await res.json();
    const newData = data.reduce((total, repo) => {
        const { language } = repo;
        /* if (language) {
            if (total[language]) {
                total[language] = total[language] + 1
            } else {
                total[language] = 1
            }
        } */
        if (language) total[language] = total[language] + 1 || 1
        return total
    }, {})
    console.log(newData);
}
fetchRepos()