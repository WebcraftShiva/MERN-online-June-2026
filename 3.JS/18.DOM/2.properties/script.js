// 1. innerText: Aware of Css styling and dont show hidden content

const a = document.querySelector("p");
// console.log(a);

// a.innerText;

// 2. innerHTML:it gives all html along with all text
a.innerHTML;
// console.log(a);

// 3.textContent: not aware css style:
a.textContent;
// console.log(a);

// getAttribute nd setAttribute:
const input = document.querySelector("input");
// console.log(input);

input.value = "shiva";
console.log(input);

// let c = input.getAttribute("type");
// console.log(c);

let d = input.setAttribute("placeholder", "My Name");
console.log(a);
