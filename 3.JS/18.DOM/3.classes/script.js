// const a = document.querySelector("h1");
// console.log(a);
// console.dir(a.classList);

// // 1. adding class:
// a.classList.add("learn");

// // // 2. remove class:
// // a.classList.remove("learn");

// // 3. contains: classList.contains
// var b = a.classList.contains("learn");
// console.dir(b);

// // // 4. toggle : adds(if not present) and remove(if already present)class:
// // a.classList.toggle("learn");
// // a.classList.toggle("iron");

// const para = document.querySelectorAll("p");

// for (let i = 0; i < para.length; i++) {
//   if (i % 2 == 0) {
//     para[i].classList.toggle("red");
//   }
//   else{
//     para[i].classList.toggle("blue");
//   }
// }

// 1. create element:
var newh1 = document.createElement("h1");
// console.log(newh1);

// 2. adding content in our element:
newh1.innerText = "Super Heros";

// 3. appendChild: show on the screen(body): appendChild
var body = document.querySelector("body");
body.appendChild(newh1);

newh1.remove();

// Example: adding button:
var btn = document.createElement("button");

btn.innerText = "Click Me";

body.appendChild(btn);
btn.style.backgroundColor = "blue";
