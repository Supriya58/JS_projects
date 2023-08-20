let counter = 1;

function addPost() {
  const input = document.getElementById("inputPost").value;
  if (input != "") {
    counter += 1;
    document.getElementById("count").innerHTML = counter;
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    document.querySelector("#body").appendChild(postDiv);
    document.getElementById("inputPost").value = "";
    const p = document.createElement("p");
    p.innerHTML = input;
    postDiv.appendChild(p);
    const likeButton = document.createElement("button");
    likeButton.innerHTML = "Like";
    postDiv.appendChild(likeButton);
    const commentButton = document.createElement("button");
    commentButton.innerHTML = "Comment";
    postDiv.appendChild(commentButton);
  }
}

function remove() {
  const notificationDiv = document.getElementById("notification");
  document.getElementById("body").removeChild(notificationDiv);
}
