console.log("This is my main file");

// require function: include or require other modules into out main module
const req = require("./calculation");
// 1.
console.log(req); // require function : return object by default

// 2.
// console.log(req.Pinku);
// console.log(req.sam);
console.log(req.sum);
console.log(req.PI);
