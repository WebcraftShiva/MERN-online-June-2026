let url = "https://swapi.info/api/people";

let container = document.querySelector(".container");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    showData(data[3]);
  });


function showData(data) {
  container.innerHTML = "";

  let div = document.createElement("div");
  div.innerHTML = `<div class="name">Name: ${data.name}</div>
  <div class="gender">Gender: ${data.gender}</div>
  <div class="height">Height: ${data.height}</div>
  `;
  container.append(div);
}
