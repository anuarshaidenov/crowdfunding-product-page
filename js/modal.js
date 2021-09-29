const backdropModal = document.querySelector(".backdrop-modal");
const modalContainer = document.getElementById("modal-container");

const btnModalOpen = document.getElementById("btn-modal-open");
const btnModalClose = document.getElementById("modal-close");

const selectModals = document.querySelectorAll(".modal-select");

btnModalOpen.addEventListener("click", function () {
  [backdropModal, modalContainer].forEach((el) =>
    el.classList.remove("hidden")
  );
});

[backdropModal, btnModalClose].forEach((el) =>
  el.addEventListener("click", function () {
    [backdropModal, modalContainer].forEach((el) => el.classList.add("hidden"));
  })
);

selectModals.forEach((section) =>
  section.addEventListener("click", function () {
    // Remove active states from all the sections
    selectModals.forEach(function (section) {
      const circle = section.querySelector(".circle");
      const sectionPledge = section.querySelector(".section__pledge");

      section.classList.remove("section--active");
      circle.classList.remove("circle--active");

      sectionPledge ? sectionPledge.classList.add("hidden") : "";
    });

    const circle = this.querySelector(".circle");
    const sectionPledge = this.querySelector(".section__pledge");

    this.classList.add("section--active");

    circle.classList.add("circle--active");
    sectionPledge.classList.remove("hidden");
  })
);
