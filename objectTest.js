/* let myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func: this.foo = " + this.foo);
        console.log("outer func: this.foo = " + self.foo);
        (function() {
            console.log("inner func: this.foo = " + this.foo);
            console.log("inner func: this.foo = " + self.foo);
        }());
    }
}
myObject.func(); */

//what is expected output =>
/* ================================================================ */

/* function f1() {
    return {
        bar: 'hello'
    }
}

function f2() {
    return
    bar: 'hello'
}
console.log(f1());
console.log(f2());
 */
//what is expected output =>
/* ================================================================ */
/* (function() {
    console.log(1);
    setTimeout(() => { console.log(2); }, 1000);
    setTimeout(() => { console.log(3); }, 0)
    console.log(4);
})(); */
//what is expected output =>
/* ================================================================ */
//closure function inside function 
/* function sum(num1, num2) {
    if (!num2) {
        return function(anyNum) {
            return num1 + anyNum
        }
    }
    return num1 + num2;
}
//log the same result
console.log(sum(2, 3));
console.log(sum(2)(3)); */
/* ================================================================ */
/* let myObject = {
        age: 10,
        name: "mohamed",
        skills: ["html", "css"]
    }
    //shallow clone clone the main object but not change in cloning object if user edit not push in main object
let cloneMyObject = {...myObject };
//deep clone clone the main object but not change in cloning object if user push in main object
let cloneMyObject2 = JSON.parse(JSON.stringify(myObject));
myObject.name = "x";
myObject.skills.push("ww");
console.log(cloneMyObject2); */
/* ================================================================ */