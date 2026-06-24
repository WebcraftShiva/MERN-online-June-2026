// var btns = document.querySelectorAll("button");
// // console.dir(btn);

// for (btn of btns) {
//   btn.onclick = myfunc;
//   btn.onclick = hey;

//   function myfunc() {
//     console.log("Button was pressed");
//   }

//   function hey() {
//     console.log("Hey There");
//   }
// }

// // 2. addEventListener
// var btns = document.querySelectorAll("button");

// for (btn of btns) {
//   //   btn.onclick = myfunc;
//   //   btn.onclick = hey;
//   btn.addEventListener("click", myfunc);
//   btn.addEventListener("click", hey);

//   function myfunc() {
//     console.log("Button was pressed");
//   }

//   function hey() {
//     console.log("Hey There");
//   }
// }

// 3. eventlistener on elements:
var p = document.querySelector("p");

p.addEventListener("mouseenter", () => {
  console.log("Mouse was over me");
});


