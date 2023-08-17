const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const cats = document.querySelector("#cats");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const catName = input.value;
  const newLi = document.createElement("li");
  newLi.innerText = catName;
  cats.append(newLi);
  input.value = "";
});
