import express from "express";

const app = express();

const PORT = 3000;

// Params:
app.get("/", (reeq, res) => {
  console.log("This is a root route");
});
// .get("/:username", (req, res) => {
//   console.log(req.params);
//   res.send("Hello, i got you");
// })
app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  res.send(`Welcome to the page of user @${username} whose id is ${id}`);
});

app.get("/search", (req, res) => {
  let { q } = req.query;
  res.send(`searching result for query: ${q}`);
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
