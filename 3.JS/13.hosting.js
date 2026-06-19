// Hoisting: Its a default behavor of JS where it moves declaration to the top of the scope during memory creation phase, before the code get executed.

// let, const : reference error : temperal dead zone, var - undefined
console.log(a);
let a = 10;
// const a = 10;
// var a = 10;

/*
let a;  // decalaration
console.log(a); // TDZ(Reference error)
a = 10;  // intialized
*/
