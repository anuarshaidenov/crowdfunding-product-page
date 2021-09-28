const hamburgerIcon = document.getElementById("hamburger");
const closeIcon = document.getElementById("close-icon");
const backdrop = document.querySelector(".backdrop");
const mobileMenu = document.querySelector(".navbar__mobile-menu");

hamburgerIcon.addEventListener("click", function () {
  [backdrop, closeIcon].forEach((el) => el.classList.remove("hidden"));
  mobileMenu.classList.remove("translate");
  this.classList.add("hidden");
});

[closeIcon, backdrop].forEach((el) =>
  el.addEventListener("click", function () {
    [backdrop, closeIcon].forEach((el) => el.classList.add("hidden"));
    mobileMenu.classList.add("translate");
    hamburgerIcon.classList.remove("hidden");
  })
);
