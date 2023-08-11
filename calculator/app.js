let num1 = parseFloat(prompt("Enter your first number"));
let num2 = parseFloat(prompt("Enter your second number"));
let calc = prompt("What calculation would you like to do?");
const add = num1 + num2;
const subtract = num1 - num2;
const multiply = num1 * num2;
const divide = num1 / num2;
if (calc === "add") {
  alert("Your result is : " + add);
} else if (calc === "subtract") {
  alert("Your result is : " + subtract);
} else if (calc === "multiply") {
  alert("Your result is : " + multiply);
} else if (calc === "divide") {
  alert("Your result is : " + divide);
} else {
  console.log("Thanks, goodbye!");
}
