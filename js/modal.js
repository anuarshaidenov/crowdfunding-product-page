const backdropModal = document.querySelector(".backdrop-modal");
const modalContainer = document.getElementById("modal-container");

const btnModalOpen = document.getElementById("btn-modal-open");
const btnModalClose = document.getElementById("modal-close");

const selectModals = document.querySelectorAll(".modal-select");

const form = document.querySelectorAll(".form-pledge");
const modalSuccess = document.getElementById("modal-success");
const sectionModal = document.querySelector(".section--modal");
const btnModalSuccess = document.getElementById("btn-modal-success");

btnModalOpen.addEventListener("click", function () {
  [backdropModal, modalContainer, sectionModal].forEach((el) =>
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

form.forEach((el) =>
  el.addEventListener("submit", function (e) {
    e.preventDefault();
    sectionModal.classList.add("hidden");
    modalSuccess.classList.remove("hidden");
  })
);

btnModalSuccess.addEventListener("click", function () {
  backdropModal.classList.add("hidden");
  modalSuccess.classList.add("hidden");
});
