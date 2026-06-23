// 1. ID selector: getElementById

let a = document.getElementById("heading");
// console.log(a);
// console.dir(a);
// console.log(a.innerHTML);

a.style.color = "green";
a.style.backgroundColor = "orange";
a.style.border = "2px solid black";
a.style.padding = "20px";

// 2. Class Selector: getElementByClassName
let b = document.getElementsByClassName("items");
console.log(b);
// b[0].style.backgroundColor = "green";
// b[1].style.backgroundColor = "pink";
for (let lists of b) {
  lists.style.color = "green";
  lists.style.fontWeight = "bold";
}

// 3. TagName selector: getElementByTagName:
let c = document.getElementsByTagName("p");
// console.log(c);

c[3].style.background = "yellow";

// 4. querySelector:
// var d = document.querySelector(".work");
// var d = document.querySelector("#work");
var d = document.querySelector("ul li");
// console.log(d);
// d[2].style.color = "red"; // it will show error because we have multiple li's in our unordered list

var e = document.querySelectorAll("ul li");
e[2].style.color = "red";
