const h1 = document.querySelector("h1");
h1.addEventListener("click", changeColor);

function changeColor() {
  h1.classList.toggle("heading");
}
// h1.removeEventListener("click", changeColor);

const div = document.getElementById("ocean");
const body = document.querySelector("body");
// body.onscroll = function () {
//   body.style.backgroundColor = "#b2f0f1";
//   div.style.backgroundColor = "#b2f0f1";
// };
window.addEventListener("scroll", function () {
  body.style.backgroundColor = "#b2f0f1";
  div.style.backgroundColor = "#b2f0f1";
});

const infodiv = document.getElementById("info");
const infobtn = document.getElementById("getinfo");
infobtn.addEventListener("click", function () {
  infodiv.style.visibility = "visible";
});
// infobtn.onclick = function () {
//   infodiv.style.visibility = "visible";
// };
const bookdiv = document.getElementById("form");
const bookbtn = document.getElementById("book");
bookbtn.addEventListener("click", function () {
  bookdiv.style.visibility = "visible";
});
// bookbtn.onclick = function() {
//   bookdiv.style.visibility = "visible";
// };
const tickets = document.getElementById("tickets");
const h4 = document.querySelector("h4");
tickets.addEventListener("click", function () {
  h4.innerText = "You are purchasing " + tickets.value + " tickets.";
});
// tickets.oninput = function () {
//   h4.innerText = "You are purchasing " + tickets.value + " tickets.";
// };
const preference = document.getElementById("preference");
const secondH4 = document.querySelector("#secondH4");
preference.addEventListener("change", function () {
  secondH4.innerText = "Your preference is : " + preference.value;
});
// preference.onchange = function() {
//   secondH4.innerText = "Your preference is : " + preference.value;
// };
