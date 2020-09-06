const leftMenu = document.querySelector(".left-menu"),
  hamburger = document.querySelector(".hamburger"),
  dropdown = document.querySelectorAll(".dropdown");

const onHamburgerClick = function () {
  leftMenu.classList.toggle("openMenu");
  hamburger.classList.toggle("open");
  dropdownClose();
};
const onBodyClick = function (evt) {
  if (!evt.target.closest(".left-menu")) {
    leftMenu.classList.remove("openMenu");
    hamburger.classList.remove("open");
    dropdownClose();
  }
};
const dropdownClose = function () {
  dropdown.forEach((item) => {
    item.classList.remove("active");
  });
};
const onLeftMenuClick = function (evt) {
  evt.preventDefault();
  const target = evt.target;
  const dropdown = target.closest(".dropdown");
  if (dropdown) {
    dropdown.classList.toggle("active");
    leftMenu.classList.add("openMenu");
    hamburger.classList.add("open");
  }
};

hamburger.addEventListener("click", onHamburgerClick);
document.addEventListener("click", onBodyClick);
leftMenu.addEventListener("click", onLeftMenuClick);
