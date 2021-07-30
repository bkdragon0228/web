const btn = document.querySelector(".navbar_toogleBtn");
const menu = document.querySelector(".navbar_menu");
const icon = document.querySelector(".navbar_links");

function btnHandler(e) {
  menu.classList.toggle("active");
  // switch의 개념, css class를 껏다, 켰다
  icon.classList.toggle("active");
}

btn.addEventListener("click", btnHandler);
