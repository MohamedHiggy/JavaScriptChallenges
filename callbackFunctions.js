/**
 * Create an example of a callback function with multiple parameters
 * and then show it being used
 */
let ss = Math.floor(Math.random() * 1000); // randome num between 1 and 0
console.log(ss);
let myCallBackFun = function(goodMsg, badMsg, target) {
    let random = Math.floor(Math.random() * 1000); // randome num between 1 and 0
    if (target.isGood) {
        setTimeout(goodMsg, random, target.name);
    } else {
        setTimeout(badMsg, random, target.name);
    }
};
let ftw = function(name) {
    console.log("Depending on the season,", name, "is a good guy");
};
let wtf = function(name) {
    console.warn("Depending on the season,", name, "is a bad guy");
};
let app = (function() {
    const castiel = {
        name: "Castiel",
        isGood: true,
    };
    const crowley = {
        name: "Crowley",
        isGood: false,
    };
    //use callback function here
    myCallBackFun(ftw, wtf, castiel);
    myCallBackFun(ftw, wtf, crowley);
})();