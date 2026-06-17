// operator(+,-,%) and operand (operator)
// ex: a + b => a and b (operand), + (operator)

// 1. Arithematical Operator:

// let a = 10;
// let b = 20;

// let c = a + b;
// console.log(c);
// let c = a - b;
// console.log(c);
// let c = a / b;
// console.log(c);
// let c = a * b;
// console.log(c);
// let c = a % b;
// console.log(c);
// let c = a ** b; // 10 power 20
// console.log(c);

// 2: Assigment Operator:
// let c = a;
// console.log(c);
// let c = 10;
// // c = c + 5;
// console.log(c);
// c += 5;
// console.log(c);
// c = 0 + 5;
// console.log(c);

// let a = 40;
// let b = 20;
// let c = a - b;
// console.log(c);
// // c = c - 10;
// // console.log(c);
// // c -= 10;
// c = -10;
// console.log(c);

// c = 10;
// c %= 5;
// console.log(c)

// c = 10;
// c /= 5;
// console.log(c);

// c = 10;
// c *= 5;
// console.log(c)

// 3. comparision operator:

let a = 10; // number
let b = "10"; // string
let c = 30; // number

// console.log(a == c); // ==: value
// console.log(a == b); //

// console.log(a === b);
// console.log(a === c); // ===: data type as well as value dono ko compare krta hai

// console.log(a != b);
// console.log(a !== b);

// console.log(a > c);
// console.log(a < c);
// console.log(a <= c);
// console.log(a >= c);

// // 4.logical operator:
// let x = true;
// let y = false;

// console.log(x && y); //ye dono conditions ko sahi hone pe chalta hai
// console.log(x || y); // any one of the contion can be ok to move a head
// console.log(!y);

// 5. increment and decrement:

let p = 5;
console.log(p);
p++; // 5 -> p -> 6
console.log(p); //6
++p; //pre-increment value: 6 -> p
console.log(p); //7
p--; // 6
console.log(p); //6
--p; // 6 -> 5
console.log(p); // 5

// 6. ternary operator: short hand notation if else
// condition ? valueIftrue : valueIffalse

let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

// 7. optional chaining: optional properties access. (object)

let users = {
  name: "shiva",
  age: 25,
};
// chaining - any value is missing in object it wil throw an error but if u use optional chaining it will show undefined
console.log(users.city.age);
console.log(users?.city?.name);
