let inp = document.querySelector("input");

// inp.addEventListener("keydown", function (e) {
//   console.dir(e);
//   console.log("Key:" + e.code);
//   console.log("Key:" + e.key);
// });

inp.addEventListener("keyup", function (e) {
  console.log("key was released");
});
