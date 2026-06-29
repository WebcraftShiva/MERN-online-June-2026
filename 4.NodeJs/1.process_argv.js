// //1.
// console.log(process.argv);
// // argv: returns 2 arguments: 1st executable path for node and 2nd is the current running file path.

let args = process.argv;
console.log(args);
for (let i = 2; i < args.length; i++) {
  console.log("hello from ", args[i]);
}
