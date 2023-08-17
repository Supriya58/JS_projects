document.querySelector("button").addEventListener("click", function (evt) {
  console.log(evt);
});
// const input = document.querySelector("input");
// input.addEventListener("keydown", function (e) {
//   console.log(e.code);
//   console.log(e.key);
// });
// input.addEventListener("keyup", function () {
//   console.log("keyup!");
// });

window.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "ArrowUp":
      console.log("UP!");
      break;
    case "ArrowDown":
      console.log("DOWN!");
      break;
    case "ArrowRight":
      console.log("Right!");
      break;
    case "ArrowLeft":
      console.log("left!");
  }
});
