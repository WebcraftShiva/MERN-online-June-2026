// fetch returns promise
// 1. console.log(fetch());

// 2. fetch using api
let a = fetch("https://catfact.ninja/fact");

a.then((res) => {
  console.log(res);
  res.json().then((value) => {
    console.log(value.fact);
  });
}).catch((err) => {
  console.log(err);
});

