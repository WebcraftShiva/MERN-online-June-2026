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

const instaData = {
  jackgrey: {
    username: "jackgrey",
    name: "JACK GREY",
    profession: "Photographer",
    bio: [
      "UK Based Clear shot, natural Pictures",
      "Commercials + Automative + Travel + Lifestyle",
    ],
    post: 816,
    followes: "21.08k",
    followings: "2543",
    website: "www.jackgreyphotographer.co.uk",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9sKLHsLQPKG7MgNCXVXMkCBGO8NlfFFYqIuBKgZ6Elw&s=10",
  },
  bheem: {
    username: "bheem",
    name: "CHOTA BHEEM",
    profession: "LAADU KANNA",
    bio: [
      "A Dhoak Pur Niwasi, Raani Indumati Favorite",
      "Fighting + Travelling + Charming",
    ],
    post: 423,
    followes: "51.03k.08k",
    followings: "1234",
    website: "www.chotaBheema.co.uk",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIXvN3l3hK9TRz0kKsyRFeb7hyV7PY-4CyxswYg6Mkg&s=10",
  },
};

app.get("/", (req, res) => {
  res.send(
    "<h1>This is a root page please give /instagram to check instagram page</h1>",
  );
});

app.get("/instagram/:username", (req, res) => {
  const { username } = req.params;

  const user = instaData[username];

  if (!user) {
    res.send("<h2>User not found</h2>");
  }
  res.render("instagram.ejs", { user });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
