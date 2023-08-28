const modalBox = document.querySelector(".modal-container");
const modalBtn = document.querySelector(".member-details");
const closeBtn = document.querySelector(".close-btn");
modalBtn.addEventListener("click", () => {
  modalBox.style = "display: block;";
});

closeBtn.addEventListener("click", () => {
  modalBox.style = "display: none;";
});
window.addEventListener("click", (e) => {
  if (e.target == modalBox) {
    modalBox.style = "display: none;";
  }
});
