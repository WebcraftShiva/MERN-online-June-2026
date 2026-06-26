// // 1.1: Promise creation:  It accept 2 callback functions
// let p = new Promise((resolve, reject) => {
//   let like = true;
//   setTimeout(() => {
//     if (like) {
//       resolve("Yes she like me");
//     } else {
//       reject("She rejected me! Am i ugly!!");
//     }
//   }, 2000);
// });
// console.log(p);

// // 1.2: consuming promise:
// p.then((value) => {
//   console.log(value);
// }).catch((error) => {
//   console.log(error);
// });

// // 1.3: Promise chaining:
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Resolve will work after 2 sec");
//   }, 2000);
// }).then((val) => {
//   console.log(val);
// });

// p1.then((val) => {
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Resolve work in 2 sec");
//     }, 2000);
//   });
//   return p2;
// })
//   .then((val) => {
//     console.log(val);
//     console.log("Work done");
//   })
//   .then((value) => {
//     console.log("Ok now work");
//   });

// // 1.4: Promise inside function

// function burgerLekarAaao() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let dukaanKhuliHai = false;
//       if (dukaanKhuliHai) {
//         resolve("Buger mil gaya");
//       } else {
//         reject("Burger ni mila");
//       }
//     }, 2000);
//   });
// }

// burgerLekarAaao()
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// 1.5:

