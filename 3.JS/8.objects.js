// Object is our data structure which store data in the form of keys and values. Key-> properties and values-> properties value

// // // A. construtor:
// let obj = new Object();
// console.log(obj);
// obj.name = "Yash";
// console.log(obj);
// console.log(typeof obj);

// // B. literal :
// let student = {
//   name: "yash",
//   age: 25,
//   city: "lucknow",
//   kind: {
//     greet: "hey there",
//   },
// };

// B.4: object inside an array:
let products = [
  {
    name: "Iphone",
    price: 120000,
  },
  {
    name: "Earbuds",
    price: 15000,
  },
  {
    name: "Ipad",
    price: 60000,
  },
  {
    name: "Washing Machine",
    price: 15000,
  },
  {
    name: "AC",
    price: 40000,
  },
];
console.log(products[3].price);

// // B.3: Nested object:
// let student = {
//   student1: {
//     name: "abc",
//     age: {
//       student2: {
//         name: "cds",
//         age: 24,
//       },
//     },
//   },
// };
// console.log(student.student1.age.student2.age);

// let user = {
//   user1: {
//     name: "shiva",
//     age: 25,
//   },
//   user2: {
//     name: "yash",
//     age: 24,
//   },
// };
// console.log(user.user2.age);

// // B.2: object value change:
// student.name = "Somya Singh";
// console.log(student);

// // B.1: Accessing object values:
// console.log(student.name); // dot notation
// console.log(student.kind.greet);
// console.log(student["kind"]["greet"]); // bracket notation
