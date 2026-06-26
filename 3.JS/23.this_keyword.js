// this: it is a special keyword in JS that refers to the object that is currently executing the function. Its a kind of reference which JS assign at runtime

// // 1. Global space: a place where you write your code

// console.log(this);

// // 1.1 strict mode
// ("strict mode");
// console.log(this);

// // 2: this inside a function:
// "use strict";
// function abc() {
//   console.log(this);
// }
// abc();
// // window.abc();

// // 3. this inside a object:
// const obj = {
//   a: 10,
//   b: 20,
//   c: function () {
//     console.log(this);
//     console.log(this.a);
//   },
// };
// obj.c();

//  ############## This methods ###########

// 1.

let student = {
  name: "shiva",
  state: function (city) {
    console.log(city);
  },
};

let state = function (state1, state2) {
  console.log(this.name);
  this.state(state1);
  this.state(state2);
};
state.apply(student, ["Mumabi", "Varanasi"]);

// let student = {
//   name: "shiva",
//   state: function (city) {
//     console.log(city);
//   },
// };
// // console.log(student);

// let state = function (state1, state2) {
//   console.log(this.name);
//   student.state(state1);
//   student.state(state2);
// };

// // apply: method that allow you to call a function immediately while explicitly setting value of this. Here arguments are passed as a array
// state.apply(student, ["mumbai", "Varanasi"]);
