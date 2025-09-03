const overlay = document.getElementById("overlay");
const fullImg = document.getElementById("fullImg");
const closeBtn = document.getElementById("closeBtn");
const galleryImgs = document.querySelectorAll(".gallery img");

galleryImgs.forEach((img) => {
  img.addEventListener("click", function () {
    overlay.style.display = "flex";
    fullImg.src = img.src;
  });
});

closeBtn.addEventListener("click", function () {
  overlay.style.display = "none";
});

overlay.addEventListener("click", function (e) {
  if (e.target != fullImg) {
    overlay.style.display = "none";
  }
});
