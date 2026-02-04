let currentSlide = 1;

function nextSlide() {
  document.getElementById("slide" + currentSlide).classList.remove("active");
  currentSlide++;
  document.getElementById("slide" + currentSlide).classList.add("active");
}

function runAway() {
  let noBtn = document.getElementById("noBtn");
  let x = Math.random() * window.innerWidth - 100;
  let y = Math.random() * window.innerHeight - 100;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

function sayYes() {
  document.getElementById("result").innerHTML =
    "YAY! I LOVE YOU FOREVER 💖💍";
}
