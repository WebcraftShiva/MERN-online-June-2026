// // 1. Restricting default form behaviour:
// var form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.log("Form submitted");
// });

// // 2. Access user data of input field:
// var form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   var inp = document.querySelector("input");
//   console.dir(inp);
//   console.log(inp.value);
//   event.preventDefault();
//   console.log("Form submitted");
// });

// 3. publishing input data to browser:
var form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  var inp = document.querySelector("input");

  var p = document.querySelector("p");
  p.innerText = inp.value;
  event.preventDefault();
});
