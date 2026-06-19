// // 1:
// console.log(a);

// var a = 10;  // undefined

// function feet() {
//   console.log(a);  // 10
// }
// feet();
// console.log(a); // 10

// // 2:

// console.log(a);  // referenceError:
// let a = 10;

// // 3:
// function test() {
//   var x = 20;
// }
// test();

// console.log(x); //global: test()  x = 20; reference error:

// // 4. let  = 10;
// let a = 10;

// function feet() {
//   let b = 20;

//   function inner() {
//     console.log(a);
//     console.log(b);
//   }
//   inner();
// }

// feet();  // 10 20

// // 5:
// function outer() {
//   function inner() {
//     let a = 25;
//   }
//   inner();
//   console.log(a);
// }
outer();

// 6.
let a = 1;

function outer() {
  let b = 2;

  function middle() {
    let c = 3;

    function inner() {
      console.log(a);
      console.log(b);
      console.log(c);
    }
    inner();
  }
  middle();
}
outer(); // 1,2,3
