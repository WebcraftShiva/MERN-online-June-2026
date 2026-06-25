// A. JS: Do Synchronous executions means one statement at a time. If error occur it wont move to next line.

// // 1.
// console.log("First line");
// console.log("Second line");
// console.log("Third line");

// // 2.
// console.log("Excution started...");
// for (let i = 0; i < 1000; i++) {
//   console.log("Loop running for: ", i);
// }
// console.log("Execution Ends here");

// B. Asynchronous: Web api (in browser) :

// // B.1 : setTimeout: Run function only once after a specific deley
// console.log("Super hero");
// // setTimeout(callback,time);
// setTimeout(() => {
//   console.log("Image fetch");
// }, 3000);
// console.log("Search is still happening");

// // clearTimeout:
// console.log("Super hero");
// const a = setTimeout(() => {
//   console.log("Image fetch");
// }, 3000);
// clearTimeout(a);
// console.log("Search is still happening");

// // B.2 : setInterval: Run function repeadly after every specified interval.
// setInterval(() => {
//   console.log("Inteval is working");
// }, 1000);

// console.log("Running");
// clearInterval(
//   setInterval(() => {
//     console.log("Inteval");
//   }, 1000),
// );
// console.log("Interval is working");

// execture anything for 10 times:

for (let i = 1; i <= 10; i++) {
  setInterval(() => {
    console.log("Hello");
  }, 1000);
}

// let count = 0;

// console.log("Interval is starting");
// const interval = setInterval(() => {
//   console.log("Hello");

//   count++;

//   if (count === 10) {
//     clearInterval(interval);
//     console.log("Interval stop");
//   }
// });
