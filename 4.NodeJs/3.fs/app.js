// Fs: file system:
import fs from "fs";

// console.log(fs);

// // 1. Read file: readFile name ya dir, biary code
// const content = fs.readFileSync("note.txt", "utf-8");
// console.log(content);

// // //2. write file:
// const content = fs.writeFileSync(
//   "write.txt",
//   "I am learning javascript",
//   "utf-8",
// );
// console.log(content);

// // 3. append: adds new content to the file:
// const pend = fs.appendFileSync("write.txt", "Hey", "utf-8");
// console.log(pend);

// // // 4. make directory:
// // const folder = fs.mkdirSync("game/xyx/a", { recursive: true });
// // console.log(folder);

// const folder = fs.mkdirSync("shiva/learning/node", { recursive: true });
// console.log(folder);

// // 5. remove directory:
// let rm = fs.rmdirSync("game");
// // console.log(rm); // error you have to remove all things inside the folder 1st to make it remove
// let rm = fs.rmdirSync("game/xyx/a");
// console.log(rm);

// // 6. sync=> Blocking operations: Programs wait untill the task is finished
// console.log("Start....\n");

// const content = fs.readFileSync("note.txt", "utf-8");
// console.log(content);

// console.log("Finished\n");

// 7. Async=> Non-Blocking operations: Programs wont wait untill the task is finished: This always take callback (err, data)
console.log("Start....\n");

const content = fs.readFile("note.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  else console.log("content is", data);
});
console.log(content);

console.log("Finished\n");
