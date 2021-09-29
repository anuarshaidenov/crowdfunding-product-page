const backdropModal = document.querySelector(".backdrop-modal");
const modalContainer = document.getElementById("modal-container");

const btnModalOpen = document.getElementById("btn-modal-open");
const btnModalClose = document.getElementById("modal-close");

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
