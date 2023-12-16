//Toggle class Active
const navbarNav = document.querySelector(".navbar-nav");

//ketika menu di click

document.querySelector("#hambureger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hambureger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
