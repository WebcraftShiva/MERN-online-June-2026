// // 1. callback
// function myfunc() {
//   console.log("How r u!!");
// }

// function hello(b) {
//   console.log("HI there");
//   b();
// }
// hello(myfunc);

// // 2.
// callback hell: nested callback : pyramid or dom
// console.log("hi");
// setTimeout(() => {
//   console.log("timer for 3s");
// }, 3000);
// setTimeout(() => {
//   console.log("timer for 1s");
// }, 1000);

//3.
// Amazon -> login details (2s) -> login done -> product -> cart add -> payment -> product deliver

// console.log("Amazon website");
// setTimeout(() => {
//   console.log("email or password");
//   setTimeout(() => {
//     console.log("amazon home page");
//     console.log("Product choose"); //fail
//     setTimeout(() => {
//       console.log("Cart section");
//       console.log("Payment Process");
//     }, 2000);
//   }, 5000);
// }, 2000);

// 4. Suppose you want to maggie:
// step 1: Maggi lene gaya : 2 sec
// step 2: Maggi mai leke aa gaya
// step 3: maggi banana start krege : 2 sec
// step 4: maggi ban gayi
// step 5: maggi khana start: 2 sec
// step 6: maggi kha liya

// // Version 1
// console.log("Maggi lene gaya");
// setTimeout(() => {
//   console.log("Maggi mai leke aa gaya");

//   console.log("Maggi banana start krege");
//   setTimeout(() => {
//     console.log("Maggi ban gayi");

//     console.log("Maggi khana start");

//     setTimeout(() => {
//       console.log("Maggi Kha liya");
//     }, 2000);
//   }, 2000);
// }, 2000);

// Strutural way to write asynchronous programming to avoid callback hell:
function maggiLaao(cb) {
  console.log("Maggi lene gaya");
  setTimeout(() => {
    console.log("Maggi mai leke aa gaya");
    cb();
  }, 2000);
}

function maggiBanno(cb) {
  console.log("Maggi banana start krege");
  setTimeout(() => {
    console.log("Maggi ban gayi");
    cb();
  }, 2000);
}

function maggiKhao() {
  console.log("Maggi khana start");
  setTimeout(() => {
    console.log("Maggi Kha liya");
  }, 2000);
}

maggiLaao(() => {
  maggiBanno(() => {
    maggiKhao;
  });
});
