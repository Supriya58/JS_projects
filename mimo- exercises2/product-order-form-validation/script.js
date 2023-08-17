function checkForm() {
  if (!checkQuantity()) {
    showError("#quantity");
  } else {
    removeError("#quantity");
  }
  if (!checkColor()) {
    showError("#color");
  } else {
    removeError("#color");
  }
  if (!checkState()) {
    showError("#state");
  } else {
    removeError("#state");
  }
  if (checkQuantity() && checkColor() && checkState()) {
    document.querySelector("#status").classList.remove("hidden");
  }
  //reset form call after submission
  reset();
  const h2 = document.getElementById("status");
  const inputs = document.querySelectorAll("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("click", function () {
      h2.classList.add("hidden");
    });
  }
}

function showError(id) {
  const input = document.querySelector(id);
  input.classList.add("error");
}

function removeError(id) {
  const input = document.querySelector(id);
  input.classList.remove("error");
}

const checkQuantity = () => {
  const input = document.querySelector("#quantity");
  return input.value > 0;
};

const checkColor = () => {
  const input = document.querySelector("#color");
  if (input.value === "--") return false;
  else return true;
};
const checkState = () => {
  const input = document.getElementById("state");
  if (input.value.length === 2) return true;
  else return false;
};
const reset = () => {
  const quantity = document.getElementById("quantity");
  quantity.value = 0;
  const color = document.getElementById("color");
  color.value = "--";
  const state = document.getElementById("state");
  state.value = "";
  const address = document.getElementById("address");
  address.value = "";
  const city = document.getElementById("city");
  city.value = "";
};
