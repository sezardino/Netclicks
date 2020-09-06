const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".tv-card__img");
const modalTitle = document.querySelector(".modal__title");
const modalGenres = document.querySelector(".genres-list");
const modalRating = document.querySelector(".rating");
const modalDescription = document.querySelector(".description");
const modalLink = document.querySelector(".modal__link");
const preloader = document.querySelector(".preloader");
const showList = document.querySelector(".tv-shows__list");

const modalShow = function () {
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
};
const modalClose = function () {
  modal.classList.add("hide");
  document.body.style.overflow = "";
};

showList.addEventListener("click", function (evt) {
  evt.preventDefault();

  const target = evt.target;
  const card = target.closest(".tv-card");

  if (card) {
    preloader.style.display = "block";
    new DBService()
      .getTVShow(card.id)
      .then((response) => {
        if (response.poster_path) {
          modalImg.src = IMG_URL + response.poster_path;
        }
        modalImg.alt = response.name;
        modalTitle.textContent = response.name;
        modalGenres.textContent = "";
        for (let item of response.genres) {
          modalGenres.innerHTML += `<li>${item.name}</li>`;
        }
        modalRating.textContent = response.vote_average;
        modalDescription.textContent = response.overview;
        modalLink.href = response.homepage;
      })
      .then(function () {
        modalShow();
      })
      .then(function () {
        preloader.style.display = "";
      });
  }
});
modal.addEventListener("click", function (evt) {
  const target = evt.target;
  if (target.classList.contains("modal") || target.closest(".cross")) {
    modalClose();
  }
});
