// MENU
document.querySelector(".menu__hamburguer").addEventListener("click", () => {
  const iconMenu = document.querySelector(".menu__hamburguer");
  const menu = document.querySelector(".header .flex__menu ul");
  menu.classList.toggle("active");
  iconMenu.classList.toggle("ri-close-line");
  iconMenu.classList.toggle("ri-menu-line");
});

const links = document.querySelectorAll(".flex__menu ul li a");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    const iconMenu = document.querySelector(".menu__hamburguer");
    const menu = document.querySelector(".header .flex__menu ul");
    menu.classList.toggle("active");
    iconMenu.classList.toggle("ri-close-line");
    iconMenu.classList.toggle("ri-menu-line");
  });
}

// SCROLLBAR COLOR
const changeColorNavBar = document.querySelector(".header");
window.onscroll = () => {
  if (window.scrollY > 0) {
    changeColorNavBar.classList.add("active");
  } else {
    changeColorNavBar.classList.remove("active");
  }
};
