console.log("heello");
// make mobile navigation work
const btn = document.getElementById("menu-btn");
btnOpenIcon = document.querySelector(".hamburgerIcon");
btnCloseIcon = document.querySelector(".closeIcon");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btnOpenIcon.classList.toggle("hidden");
  btnCloseIcon.classList.toggle("hidden");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});
