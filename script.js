const sideResponsiveBar = document.getElementById("resp-menu-bar");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const aboutBtn = document.querySelector(".about-btn");
const skillsBtn = document.querySelector(".skills-btn");
const projectsBtn = document.querySelector(".projects-btn");
const contactBtn = document.querySelector(".contact-btn");
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);
sections.forEach((section) => {
  observer.observe(section);
}); 

openMenu.addEventListener("click", () => {
  sideResponsiveBar.style.transform = " translateX(0)";
  document.body.classList.toggle("no-scroll");
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 480) {
    openMenu.style.display = "none";
    closeMenu.style.display = "none";
  }
});
//
closeMenu.addEventListener("click", () => {
  sideResponsiveBar.style.transform = " translateX(-500px)";
  document.body.classList.remove("no-scroll");
});
const removeScroll = function () {
  document.body.classList.remove("no-scroll");
  sideResponsiveBar.style.transform = " translateX(-500px)";
};
aboutBtn.addEventListener("click", removeScroll);
skillsBtn.addEventListener("click", removeScroll);
projectsBtn.addEventListener("click", removeScroll);
contactBtn.addEventListener("click", removeScroll);

window.addEventListener("DOMContentLoaded", () => {
  let count = 1;
  const counter = document.getElementById("counter");

  const interval = setInterval(() => {
    counter.textContent = count;

    if (count === 20) clearInterval(interval);

    count++;
  }, 100);
});


// const hireBtn = document.querySelector(".whatsapp-btn");
// const aboutSec = document.querySelector(".project-section");

// hireBtn.addEventListener("click", function (e) {
//   aboutSec.scrollIntoView({ behavior: "smooth" });
// });
