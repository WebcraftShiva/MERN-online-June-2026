// // let student1 = [10, 20, 30, 40, 50];
// let students = ["aman", "shradh", "kanav", "malik"];
// console.log(students);

// let items = ["shivam", 11603456, "83.4%", "Delhi University"];
// console.log(items);

// // 1. Array are mutable:
// items[1] = 324;
// console.log(items);

// // 2.Accessing index 3 inside array:
// console.log(items[2]);

// // 3. Accessing not present value inside a array:undefined
// console.log(items[8]);

// // 4. Array type is object:
// console.log(typeof items);

// // 5. Acccessing particualr item element from an array:
// console.log(items[0][2]);

// ############ ARRAY METHOD ###############

let fruits = ["apple", "bananas", "grapes", "mango"];
// console.log(fruits);

// // 1. PUSH: add item at end
// fruits.push("guava");
// console.log(fruits);

// // 2. POP: remove last element
// fruits.pop();
// console.log(fruits);

// // 3. unShift: add item at the start
// fruits.unshift("water-melon");
// console.log(fruits);

// // 4. shift: remove 1st element from the array
// fruits.shift();
// console.log(fruits);

// // 5. indexof: return index of something
// console.log(fruits.indexOf("grapes"));
// console.log(fruits.indexOf("bananas"));

// // 6. includes: tells wheather this value is present in an array or not: true or false(retun)
// console.log(fruits.includes("guava"));
// console.log(fruits.includes("apple"));

// // // 7. concat: merge 2 arrays: return new array
// let arr1 = ["apple", "bananas"];
// let arr2 = ["mangoes", "watermelon"];
// let arr3 = [1, 2, 3, 4];
// let arr4 = [5, 6, 7, 8];

// // let result = arr1.concat(arr2);
// // console.log(result);

// // spread: new array return
// // let result = arr1.concat(arr2, arr3, arr4);
// // console.log(result);

// let result = [...arr1, ...arr2, ...arr3, ...arr4];
// console.log(result);

// // 8. reverse: reserve the array:
// let rev = [1, 2, 3, 4];
// console.log(rev.reverse());

// 9.slice: copies a portion of an array:
let arr = ["a", "b", "c", "d"];

console.log(arr.slice(2));
console.log(arr.slice(1, 3));
console.log(arr.slice(-2));
