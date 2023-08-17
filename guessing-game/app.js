let maximum = parseInt(prompt("Enter the maximum number"));
while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;
let guess = prompt("Enter your first guess. Type 'q' to quit the game.");
let attempts = 1;
while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  guess = parseInt(guess);

  if (guess > targetNum) {
    guess = prompt("Too high, enter a new guess");
    attempts++;
  } else if (guess < targetNum) {
    guess = prompt("Too low, enter a new guess");
    attempts++;
  } else {
    guess = prompt("Invalid guess.Please enter a number or 'q' to quit.");
  }
}
if (guess === "q") {
  console.log("Ok, you quit.");
} else {
  console.log(`You got it, it took you ${attempts} guesses.`);
}
