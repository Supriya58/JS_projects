function clearBorders() {
  const elements = document.getElementsByClassName("border");
  for (const element of elements) {
    element.classList.remove("border");
  }
}

function setMainImage(id) {
  const mainImage = document.querySelector("#mainImage");
  const thumbnail = document.querySelector("#thumbnail" + id);
  const thumbnailSrc = thumbnail.getAttribute("src");
  mainImage.setAttribute("src", thumbnailSrc);
  clearBorders();
  thumbnail.classList.add("border");
}
