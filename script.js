const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const popupContainer = document.getElementById("popupContainer");

openBtn.addEventListener("click", function() {
  popupContainer.style.display = "block";
});

closeBtn.addEventListener("click", function() {
  popupContainer.style.display = "none";
});
