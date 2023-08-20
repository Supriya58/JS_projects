let correctAns = 0;

function onSubmit() {
  let ans = document.getElementById("answer").value;
  let resultP = document.getElementById("result");
  if (ans == correctAns) {
    resultP.innerHTML = "Correct";
  } else {
    resultP.innerHTML = "Wrong";
  }
}

function onNext() {
  let ques = document.body.children[1].firstElementChild;
  correctAns = 1;
  ques.innerHTML =
    "What single digit appears most frequently between and including the numbers 1 and 1,000? Hint: look for a pattern!";
  let inputBox = ques.nextElementSibling;
  inputBox.value = "";
  let nextButton = inputBox.nextElementSibling.nextElementSibling;
  nextButton.innerHTML = "End";
  nextButton.onclick = () => {
    document.body.innerHTML = "This page is under construction!";
  };
  let resP = nextButton.nextElementSibling;
  resP.innerHTML = "";
}
