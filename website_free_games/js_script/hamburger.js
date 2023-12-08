hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
  navBar = document.querySelector(".dropdown");
  navBar.classList.toggle("active");
}