// MENU
document.querySelector(".menu__hamburguer").addEventListener("click", () => {
  const menu = document.querySelector(".header .flex__menu ul");
  menu.classList.toggle("active");
});

// SCROLLBAR COLOR
const changeColorNavBar = document.querySelector(".header");
window.onscroll = () => {
  if (window.scrollY > 0) {
    changeColorNavBar.classList.add("active");
  } else {
    changeColorNavBar.classList.remove("active");
  }
};
