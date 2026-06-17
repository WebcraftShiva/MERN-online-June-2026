// 1. primitive (7): number, string, boolean, undefined, null, bigint, symbol(creats unique identifiers)

// 1.1: NUMBER:
let a = 10;
let b = -5;
let c = 1.5;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// 1.2: string:
let msg = "Meet after lecture";
console.log(typeof msg);

// 1.3: boolean:
let x = false;
console.log(typeof x);

// 1.4: undefined:
let y;
console.log(typeof y);
y = 20;
console.log(typeof y);

// 1.5: null: type -> object
let j = null;
console.log(typeof j);

// 1.6: bigint:
let trade = 133234243134130;
console.log(trade);

// 1.7 symbol:
let id = Symbol("id1");
console.log(typeof id);

// 2. Non-primitive(3): object,array, function

// 2.1: object: it keeps realted information in the form of key(name,age,what i do) values(shivam, 25, i am a senior software engineer) pairs
let objectValue = {
  name: "shivam",
  age: 25,
  "what i do": "I am a senior software engineer",
};
console.log(objectValue);
// 2.2: array: It keeps multiple values in an variable, values can be of different/same type which is not possible in other programming languages. As, they suppose same short of values only

let age = ["apple", 23, 3.5];
// printMessage();
console.log(age);



// 2.3: function:
function printMessage() {
  console.log("function is working");
}
