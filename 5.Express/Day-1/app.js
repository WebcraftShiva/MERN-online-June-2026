import express from "express";

const app = express();
console.log(app); // app-> express: object which has lot of methods and propeties are defined.

// listen: 2 argument:
// 1) port- It logical endpoint of network that is used to exchange information btw a web server and web client
// 2) callback
app.listen(3000, () => {
  console.log("App is listening at Port 3000");
});
