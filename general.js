 /**
  * What is the output of these all lines and why?
  */

 console.log(["a", "b"] == ["a", "b"]); //false
 console.log(["a", "b"] == ["a", "b"] + []); //true
 console.log(["a", "b", "c"] == ["a", "b"] + []); //false
 console.log(["a", "b"] == ["b", "a"]); //false
 console.log(["a", "b"] == "a,b"); //true
 /*****************************************************/
 let first = (!+[] * []); //0
 let second = (!+[] + [] * []); //1
 let third = (!+[] + [] + ![]).length; //6
 console.log(first);
 console.log(second);
 console.log(third);
 /*****************************************************/
 console.log(+"1"); //1
 console.log(+true); //1
 console.log(+false); //0
 console.log(+""); //1
 console.log(+"hello"); //NAN
 console.log(+1); //1
 /*****************************************************/
 let n = ((x = 1), (y = 2), (z = 3)); //3
 /*****************************************************/
 console.log(!!true); //true
 console.log(!!false); //false
 console.log(!!""); //false
 console.log(!!1); //true
 console.log(!!-1); //true
 console.log(!!NaN); //false
 console.log(!!undefined); //false
 console.log(!!"false"); //true
 console.log(!!null); //false
 /*****************************************************/
 (() => {
     let one, two; //two wil be 321
     try {
         //321 mean the message of error =>
         throw new Error(321);
     } catch (one) {
         (one = 123), (two = 321);
         console.log(one); //123
     }
     console.log(one); //undefiend
     console.log(two); //321
 })();
 /*****************************************************/
 let n1 = 111; //primitive
 let n2 = new Number(123); //object cause new
 let n3 = Number(123); //primitive
 n1.prop = true;
 n2.prop = true;
 n3.prop = true;
 console.log(n1.prop); //undefined
 console.log(n2.prop); //true
 console.log(n3.prop); //undefined
 /*****************************************************/