//investment calculation
const initial = 2000;
const rate = 10;
const years = 3;
const getValue = (init = 0, rate = 5, time = 0) =>
  init + init * (rate / 100) * time;

console.log(getValue(5000, 15, 5));

//Restaurant Order
const italianFood = [
  {
    mealName: "Pasta Bolognese",
    quantity: 3,
    price: 7,
  },
  {
    mealName: "Pepperoni pizza",
    quantity: 2,
    price: 10,
  },
];
const thaiFood = [
  {
    mealName: "Pad Thai",
    quantity: 1,
    price: 8,
  },
];
const indianFood = [
  {
    mealName: "Chapati",
    quantity: 8,
    price: 7,
  },
  {
    mealName: "Chicken Massala",
    quantity: 5,
    price: 9,
  },
  {
    mealName: "Tandoori Chicken",
    quantity: 5,
    price: 9,
  },
];

function findMeal(name, menu) {
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].mealName === name) {
      return menu[i];
    }
  }
}

function selectMeal(name, type) {
  if (type === "italian") {
    return findMeal(name, italianFood);
  } else if (type === "indian") {
    return findMeal(name, indianFood);
  } else if (type === "thai") {
    return findMeal(name, thaiFood);
  } else {
    return "not found";
  }
}

function createSummary(name, type, amount) {
  const order = selectMeal(name, type);

  const orderPossible = order !== "not found" && amount <= order.quantity;
  const errorMessage = "Something went wrong, please try again later";
  if (orderPossible) {
    const total = amount * order.price;
    return `Thank you for your ordering ${amount} ${name}.Your total is $${total}`;
  } else {
    return errorMessage;
  }
}
console.log(createSummary("Pasta Bolognese", "italian", 3));

//Automated Banking
let accountBalance = 6500;
const deposit = (amount, pinCheck) => {
  if (pinCheck) {
    console.log("Depositing: $" + amount);
    accountBalance += amount;
    return true;
  } else {
    return false;
  }
};
const withdraw = (amount, pinCheck) => {
  if (pinCheck && checkMinBalance(amount, pinCheck)) {
    console.log("Withdrawing: $" + amount);
    accountBalance -= amount;
    return true;
  } else {
    return false;
  }
};
const balance = () => "Your balance is currently: $" + accountBalance;
const greeting = (name) =>
  "Welcome to your automated banking portal, " + name + ".";
const pin = (inputPin) => inputPin === 1568;
const checkMinBalance = (withdrawalAmt) => withdrawalAmt < accountBalance;

console.log(greeting("Jane"));
console.log(balance());
if (deposit(50, 1568)) {
  console.log(balance());
}
if (withdraw(1200, 1568)) {
  console.log(balance());
}
if (withdraw(6600, 1568)) {
  console.log(balance());
}



