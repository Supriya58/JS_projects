function createTodo() {
  //create el
  const listItem = document.createElement("li");
  const deleteButton = document.createElement("button");
  //get ids
  const todosContainerElement = document.getElementById("todos-container");
  const userInput = document.getElementById("note").value;
  //set text
  listItem.textContent = userInput;
  deleteButton.textContent = "Delete";
  //add event listener
  deleteButton.addEventListener("click", function (event) {
    deleteTodo(event, listItem);
  });
  listItem.addEventListener("click", function (event) {
    todoCheck(event, listItem);
  });
  //append child
  listItem.appendChild(deleteButton);
  todosContainerElement.appendChild(listItem);
  //reset input
  document.getElementById("note").value = "";
}

function deleteTodo(event, listItem) {
  const todosContainerElement = document.getElementById("todos-container");
  todosContainerElement.removeChild(listItem);
}

function todoCheck(event, listItem) {
  if (listItem.style.textDecoration === "") {
    listItem.style.textDecoration = "line-through";
  } else {
    listItem.style.textDecoration = "";
  }
}
