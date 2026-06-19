// // define variable : keyword(var, let, const)

// var: global scope, functional scope
// let: global scope, functional scope, block scope
// const: global scope, functional scope, block scope

// // 1. global scope: By default all varaibles has a global scope means they can be accessible throught the program

// var globalVar1 = "Global Variable 1";
// let globalVar2 = "Global Variable 2";
// const globalVar3 = "Global Variable 3";

// function myfunc() {
//   console.log(globalVar1);
//   console.log(globalVar2);
//   console.log(globalVar3);
// }
// myfunc();
// console.log(globalVar1);
// console.log(globalVar2);
// console.log(globalVar3);

// // 2. function scope: varaibles declared inside a function can only be available inside the function

// function myfun() {
//   //   var a = 20;
//   //   let a = 20;
//   //   const a = 20;
//   console.log(a);
// }
// myfun();
// console.log(a);

// // 3. block scope
// {
//   var a = 20;
//   let b = 30;
//   const c = 40;
//   //   console.log(a);
//   //   console.log(b);
//   //   console.log(c);
// }
// console.log(a); // yes
// // console.log(b); // no
// // console.log(c); // no

// 4. lexical scope: variable declared in outer function can be accessible inner function but variable inside inner function cannot be accessible in outer most function
function cartSection() {
  let x = 5;
  let y = 6;
  let sum = x + y;
  console.log(x);
  console.log(a);

  function payment() {
    let a = 10;
    let transcationDetail = "";
    console.log(a);
    console.log(sum);
    console.log(x);
  }
  payment();
}
cartSection();
