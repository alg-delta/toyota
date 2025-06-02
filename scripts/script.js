let openModal = document.querySelectorAll(".banner-btn-explore");
let closeModal = document.querySelector(".close-modal");
let modalBtn = document.querySelector(".modal-btn");
let modalWrapper = document.querySelector(".modal-wrapper");
for (let open of openModal) {
  open.addEventListener("click", function () {
    modalWrapper.style.display = "flex";
  });
}
closeModal.addEventListener("click", function () {
  modalWrapper.style.display = "none";
});
modalBtn.addEventListener("click", function () {
  modalWrapper.style.display = "none";
});
modalWrapper.addEventListener("click", function (event) {
  if (event.target === modalWrapper) {
    modalWrapper.style.display = "none";
  }
});
document.addEventListener("keydown", function (event) {
  if (event.code === "Escape") {
    modalWrapper.style.display = "none";
  }
});
