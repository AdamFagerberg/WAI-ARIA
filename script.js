const openBtn = document.querySelector("#openModalBtn");
const modal = document.querySelector("#accessibleModal");
const closeBtn = document.querySelector("#closeModalBtn");

openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  openBtn.classList.add("hidden");
  closeBtn.focus();
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  openBtn.classList.remove("hidden");
  openBtn.focus();
});

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modal.classList.add("hidden");
    openBtn.classList.remove("hidden");
    dialog.close();
    menuContent.classList.add("hidden");
  }
});

const dialog = document.querySelector("#accessibleDialog");
const dialogOpenBtn = document.querySelector("#dialogOpenBtn");
const dialogCloseBtn = document.querySelector("#dialogCloseBtn");

dialogOpenBtn.addEventListener("click", () => {
  dialog.show();
});

dialogCloseBtn.addEventListener("click", () => {
  dialog.close();
  dialogOpenBtn.focus();
});

const menuContent = document.querySelector("#menuContent");
const menuOpen = document.querySelector("#menuButton");

menuOpen.addEventListener("click", () => {
  menuContent.classList.toggle("hidden");
});
