// Prototypes are shared objects having functions. The main use of it is to reuse behaviour instead of duplicating it.

const person1 = {
  name: "shiva",
  age: 25,
  isAdult: true,
};
console.log(person1);

// prototype chaining:
const person2 = Object.create(person1);
console.log(person2);
const person3 = Object.create(person2);
console.log(person3);

person2.name = "Yash";
console.log(person2.name);
console.log(person1.name);
console.log(person3.name);

console.log(person3.__proto__ == person2);
console.log(person2.proto == person1);

// hasOwnProperty:

console.log(person3.hasOwnProperty("name"));
