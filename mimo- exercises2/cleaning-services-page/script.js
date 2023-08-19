const allButton = document.querySelector("#allButton");
const insideButton = document.querySelector("#insideButton");
const outsideButton = document.querySelector("#outsideButton");
const lawnButton = document.querySelector("#lawnButton");
const cleaningButton = document.querySelector("#cleaningButton");
const clearEstimateButton = document.querySelector("#clearEstimateButton");
const outsideServices = document.querySelectorAll(".outsideServices");
const insideServices = document.getElementsByClassName("insideServices");
const estimateBanner = document.querySelector("h3");
const lawnPhoto = document.getElementById("lawnPhoto");
const lawnEstimate = document.querySelector("#lawnEstimate");
const cleaningPhoto = document.querySelector("#cleaningPhoto");
const cleaningEstimate = document.querySelector(".cleaningEstimate");
const estimates = document.getElementsByTagName("li");

function hideBanner() {
  document.getElementById("banner").style.display = "none";
}

function showOutside() {
  hideBanner();
  outsideServices[0].classList.remove("hide");
}

function showInside() {
  hideBanner();
  insideServices[0].classList.remove("hide");
}

function showAll() {
  showOutside();
  showInside();
}

function showEstimateBanner() {
  estimateBanner.classList.remove("hide");
}

function showClearButton() {
  clearEstimateButton.classList.remove("hide");
}

function addLawn() {
  showEstimateBanner();
  showClearButton();
  lawnEstimate.classList.remove("hide");
  lawnPhoto.setAttribute("src", "https://mimo.app/i/piggy-bank.png");
}

function addCleaning() {
  showEstimateBanner();
  showClearButton();
  cleaningEstimate.classList.remove("hide");
  cleaningPhoto.setAttribute("src", "https://mimo.app/i/piggy-bank.png");
}

function clearEstimate() {
  estimateBanner.classList.add("hide");
  clearEstimateButton.classList.add("hide");
  Array.from(estimates).forEach((el) => {
    el.classList.add("hide");
  });
  lawnPhoto.src = "https://mimo.app/i/colorful-flowers.png";
  cleaningPhoto.src = "https://mimo.app/i/cleaning.png";
}
allButton.addEventListener("click", showAll);
outsideButton.addEventListener("click", showOutside);
insideButton.addEventListener("click", showInside);
lawnButton.addEventListener("click", addLawn);
cleaningButton.addEventListener("click", addCleaning);
clearEstimateButton.addEventListener("click", clearEstimate);
