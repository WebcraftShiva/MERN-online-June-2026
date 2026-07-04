import express from "express";
import { fileURLToPath } from "url";

const app = express();

import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

//we are setting our template which is responsible for viewing our template to ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  // res.send("This is a home page"); // resp: string,object,html, end -> X
  res.render("LandingPage.ejs", {
    name: "Shivam Singh",
    Learning: "Express EJS Templates",
    courses: ["Html", "CSS", "Javascript", "Node"],
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
