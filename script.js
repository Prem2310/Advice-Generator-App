const btn = document.getElementById("generate");
let output = document.getElementById("output");

btn.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      output.innerHTML = data.slip.advice;
    })
    .catch((error) => {
      console.log("Error fetching advice:", error);
    });
});
