async function getData() {
  try {
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();

    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
