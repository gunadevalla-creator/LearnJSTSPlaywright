// ============================================================
// Topic: null vs undefined in JavaScript
// ============================================================


/* SIMPLE DEFINITIONS:

   undefined  ->  A variable exists, but it has not been assigned any value yet.
                  JavaScript itself sets this automatically.

   null       ->  A variable exists, but the developer explicitly assigns 
                 "no value" or "empty".
                 It is intentional absence of any value.
*/

// var x;
// console.log(x);

// var audi = null;
// console.log(audi);

// --------------------------------------------------------
// 1. undefined
// --------------------------------------------------------

let username; // variable declared but not assigned any value
console.log(username); // Output: undefined
//typeof undefined is "undefined"

// --------------------------------------------------------
// 2. null
// --------------------------------------------------------
let audi = null;
console.log(audi); // Output: null
//typeof null is "object" (this is a known quirk in JavaScript) 


/*
  | Feature              | undefined                     | null                           |
  |----------------------|-------------------------------|--------------------------------|
  | Meaning              | Not assigned yet              | Intentionally empty            |
  | Who sets it?         | JavaScript automatically      | Developer manually             |
  | Type                 | undefined                     | object (historical bug in JS)  |
  | ==  comparison        | null == undefined  -> true    |                                |
  | === comparison       | null === undefined -> false   |                                |
*/

// In the above  (==) -> is fake equals to
// In the above  (===) -> is real equals to