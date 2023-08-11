const btn2 = document.querySelector("#v2");
btn2.onclick = function () {
  console.log("this is new method");
  console.log("it works yay");
};
function scream() {
  console.log("ahhh");
  console.log("stop touching me");
}
btn2.onmouseenter = scream;

document.querySelector("h1").onclick = () => alert("hey oh");

const btn3 = document.querySelector("#v3");
function shout() {
  alert("noooo");
}
function stop() {
  console.log("end it please");
}
btn3.addEventListener("click", shout, { once: true });
btn3.addEventListener("click", stop);
