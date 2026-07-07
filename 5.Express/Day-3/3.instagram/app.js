import express from "express";
import { fileURLToPath } from "url";

const app = express();

import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  posts.push({ username, content });
  res.redirect("/posts");
});
app.get("/posts/new", (req, res) => {
  res.render("newPost.ejs");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
