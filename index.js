const hamburgerIcon = document.getElementById("hamburger");
const closeIcon = document.getElementById("close-icon");
const backdrop = document.querySelector(".backdrop");
const mobileMenu = document.querySelector(".navbar__mobile-menu");

hamburgerIcon.addEventListener("click", function () {
  [backdrop, mobileMenu, closeIcon].forEach((el) =>
    el.classList.remove("hidden")
  );
  this.classList.add("hidden");
});

[closeIcon, backdrop].forEach((el) =>
  el.addEventListener("click", function () {
    [backdrop, mobileMenu, closeIcon].forEach((el) =>
      el.classList.add("hidden")
    );
    hamburgerIcon.classList.remove("hidden");
  })
);
