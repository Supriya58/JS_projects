let selectBool = false;
let firstNameBool = false;
let lastNameBool = false;
let checkBool = false;
let termsBool = false;
let notificationExists = false;
const notification = document.getElementById("notification");

function getValue() {
  const selectResult = document.getElementById("select-value").value;
  document.getElementById(
    "employment-status"
  ).innerHTML = `Please select employment status: ${selectResult}`;
  document.getElementById("employment-status").style.color = "#62d76b";
  selectBool = true;
}

function getFirstName(e) {
  document.getElementById(
    "first-name"
  ).innerHTML = `Enter first name: ${e.currentTarget.firstname.value}`;
  document.getElementById("first-name").style.color = "#62d76b";
  firstNameBool = true;
}

function getLastName(e) {
  document.getElementById(
    "last-name"
  ).innerHTML = `Enter last name: ${e.currentTarget.lastname.value}`;
  document.getElementById("last-name").style.color = "#62d76b";
  lastNameBool = true;
}

function getCheckValue() {
  document.getElementById("question").style.color = "#62d76b";
  checkBool = true;
}

function completeTerms() {
  document.getElementById("terms-header").style.color = "#62d76b";
  termsBool = true;
}

function submit() {
  if (
    !selectBool &&
    !firstNameBool &&
    !lastNameBool &&
    !checkBool &&
    !termsBool
  ) {
    notification.innerHTML = "Error, none of the fields are filled up.";
    notification.style.color = "ff0000";
    console.log(notification);
  } else if (
    !selectBool ||
    !firstNameBool ||
    !lastNameBool ||
    !checkBool ||
    !termsBool
  ) {
    notification.innerHTML =
      "Error!!Please fill up all the sections in your form.";
    notification.style.color = "#ff0000";
  } else {
    notification.innerHTML =
      "Your submission is complete, you may now close the browser.";
    notification.style.color = "#62d76b";
  }
}
