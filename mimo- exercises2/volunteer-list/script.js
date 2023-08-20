const dayInput = document.getElementById("day");
let daysOfWeek;
let dayPicked;
let volunteerSlots;
let firstSlot;

function addVolunteer(day, userName) {
  dayInput.classList.remove("error");
  daysOfWeek = document.querySelector("#daysOfWeek").children;
  dayPicked = daysOfWeek[day].children;
  volunteerSlots = dayPicked[1];
  firstSlot = volunteerSlots.firstElementChild;
  if (firstSlot.innerHTML == "open") {
    firstSlot.innerHTML = userName;
  } else if (firstSlot.nextElementSibling.innerHTML == "open") {
    firstSlot.nextElementSibling.innerHTML = userName;
  } else {
    dayInput.classList.add("error");
  }
}
