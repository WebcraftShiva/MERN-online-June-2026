const sum = (a, b) => a + b;
const PI = 3.14;

// 1. single value
// module.exports = 123;  // module.exports: woh 1 hi object ki value ko accept krta hai

// 2. value from defined variable or whole function:
// module.exports = sum;
// module.exports = PI;

// // 3. you want to pass multiple values as a object to that export object
// const obj = {
//   sam: sum,
//   Pinku: PI,
// };

// module.exports = obj;

// // 4. another way to export
// module.exports = {
//   sam: sum,
//   Pinku: PI,
// };

// 3. short hand way:
exports.sum = (a, b) => a + b;
exports.PI = 3.14;
