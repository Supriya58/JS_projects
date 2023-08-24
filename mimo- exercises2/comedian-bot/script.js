const joke = [
  "If the internet is a boat, where would they park it?",
  "Google doc.",
];
let para = document.querySelector("p");
let count = 0;
const interval = setInterval(function () {
  para.innerHTML += ".";
  count += 1;
  if (count == 3) {
    para.innerHTML += "<br>" + "Ok got one";
  }
}, 1000);
setTimeout(function () {
  para.innerHTML += "<br>" + joke[0];
  clearInterval(interval);
}, 5000);
setTimeout(function () {
  para.innerHTML = "<br>" + joke[1];
}, 7000);
