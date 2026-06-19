// HOF:
// 1. They are a function: that accept another function as a argument
// 2. return another function

/*
function funcName(argument){
//code/ function executable

}
funcName(20)
*/


function sayHi(func, val) {
  for (let i = 1; i <= val; i++) {
    func();
  }
}

let hello = function () {
  console.log("Hi there");
};
sayHi(hello, 20);
