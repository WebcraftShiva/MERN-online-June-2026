// 1. for in loop: iteration loop
let arr = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < 3; i++) {
//   console.log(arr[i]);
// }

// // // Example 1:
// for (let i in arr) {
//   console.log(i);
// }

// // Example 2: it returns key not value
// const person = {
//   name: "shiva",
//   age: 25,
//   city: "Varanasi",
// };

// for (let key in person) {
//   console.log(person[key]);
// }

// // 2. for of: it iterates over the values of the iterable

// const heros = ["Super Man", "Bat Man", "Hey Man"];

// // Example 1:
// for (let hero of heros) {
//   console.log(hero);
// }

// // Example 2:
// const name = "shiva";
// for (let ch of name) {
//   console.log(ch);
// }

// // Example 3:
// const person = {
//   name: "Shiva",
// };

// for (let p of person) {
//   console.log(p);
// }
// // plain objects are not iterable by default bcz they have properties

// 3. forEach: Its a array method: Array: It perform callback function once for each element of an array.
const fruits = ["Apple", "Mango", "Guava", "Pineapple"];

fruits.forEach(function (fruit) {
  console.log(fruit);
});
