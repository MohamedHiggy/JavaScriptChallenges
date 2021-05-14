/**
 * Create an example of a JavaScript Singleton.
 * After the first object is created, it will return additional 
 * references to itself
 */

let obj = (function() {
    let objInstance; //private variable
    function create() { //private function to create methods and properties
        let isRun = false;
        let start = function() { isRun = true; }
        let stop = function() { isRun = false; }
        let currentState = function() { return isRun }
        return {
            start,
            stop,
            currentState
        }
    }
    return {
        getInstance: function() {
            if (!objInstance) {
                objInstance = create();
            }
            return objInstance;
        }
    };
})();

let obj1 = obj.getInstance();
let obj2 = obj.getInstance();
console.log(obj1.currentState());
console.log(obj2.currentState());
obj1.start();
console.log(obj1.currentState());
console.log(obj2.currentState());