window.addEventListener("scroll", () => {
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});

let navList = document.querySelector(".nav_list");
const menuToggle = document.querySelector(".toggle");
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navList.classList.toggle("show_menu");
});

document.onclick = function (clickEvent) {
  if (clickEvent.target.id != "nav_list" && clickEvent.target.id != "toggle") {
    menuToggle.classList.remove("active");
    navList.classList.remove("show_menu");
  }
};
