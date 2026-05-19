const sideResponsiveBar = document.getElementById("resp-menu-bar");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const aboutBtn = document.querySelector(".about-btn");
const skillsBtn = document.querySelector(".skills-btn");
const projectsBtn = document.querySelector(".projects-btn");
const contactBtn = document.querySelector(".contact-btn");
const respHireBtn = document.querySelector(".resp-hire-btn");

//
openMenu.addEventListener("click", () => {
  sideResponsiveBar.style.transform = " translateX(0)";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  document.body.classList.toggle("no-scroll");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 480) {
    openMenu.style.display = "none";
    closeMenu.style.display = "none";
  }
});

closeMenu.addEventListener("click", () => {
  sideResponsiveBar.style.transform = " translateX(-500px)";
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
  document.body.classList.remove("no-scroll");
});

const removeScroll = function () {
  document.body.classList.remove("no-scroll");
  sideResponsiveBar.style.transform = " translateX(-500px)";
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
};
aboutBtn.addEventListener("click", removeScroll);
skillsBtn.addEventListener("click", removeScroll);
projectsBtn.addEventListener("click", removeScroll);
contactBtn.addEventListener("click", removeScroll);
respHireBtn.addEventListener("click", removeScroll);
