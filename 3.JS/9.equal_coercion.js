console.log(1 == 1);
console.log(1 == "1");
console.log(1 === "1");
console.log(1 == "A"); // 1-> number, A->string Number(A)-> NaN == 1 (false)
console.log(1 == []); // 1-> number, []->object,""->  0 ; 1 == 0
console.log(0 == []); // 0- number, []-object -> ""  ====> 0 == "" -> Number("") -> 0 ===> 0 == 0
console.log(1 == ""); //""-> 0, 1 == 0
console.log([] == ""); // []-> object, ""-> 0, [].tostring()= ""-> 0, 0 == 0 : true
console.log([] == false); // []->object == false-> boolean; false-> 0, [] = 0; [].tostring()-> "" -> 0 == 0
