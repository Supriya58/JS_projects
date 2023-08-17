const button = document.querySelector("button");
const h1 = document.querySelector("h1");

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

function click() {
  const newColor = makeRandColor();
  document.body.style.backgroundColor = newColor;
  h1.innerHTML = newColor;
}
button.addEventListener("click", click);
