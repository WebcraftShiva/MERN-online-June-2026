// // Callback: It is a function passed as an argument to another function

// // 1.
// function first() {
//   console.log("This is a first function");
// }

// function second() {
//   console.log("This is a second function");
// }

// // function call
// first();
// second();

// // 2. function call into another function: function second with a callback as first
// function first(call) {
//   console.log("This is a first function");
//   call();
// }

// function second() {
//   console.log("This is a second function");
// }

// // function call
// first(second);
// // second(first);
