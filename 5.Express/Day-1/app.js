import express from "express";

const app = express();
console.log(app); // app-> express: object which has lot of methods and propeties are defined.

// // use - method: Takes all request - get/post
// app.use((req, res) => {
//   console.log("Request recieved");
// });

// app.send: send request to the server:
app.use((req, res) => {
  console.log("Request receive");
  //   res.send("This is a basic response");
  //   res.send({
  //     name: "shiva",
  //     age: 25,
  //   });
  let html =
    "<h1>Learning Express</h1><ul>Super Hero's<li>Iron Man</li><li>Batman</li></ul>";
  res.send(html);
});

// listen: 2 argument:
// 1) port- It logical endpoint of network that is used to exchange information btw a web server and web client
// 2) callback
app.listen(3000, () => {
  console.log("App is listening at Port 3000");
});
