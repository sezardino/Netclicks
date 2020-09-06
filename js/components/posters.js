export default posters = () => {
  const tvShows = document.querySelector('.tv-shows');

  const changeImg = function(evt) {
    const card = evt.target.closest('.tv-shows__item');

    if (card) {
      const img = card.querySelector('.tv-card__img');
      const imgData = img.dataset.backdrop;

      if (imgData) {
        img.dataset.backdrop = img.src;
        img.src = imgData;
      }
    }
  };

  tvShows.addEventListener('mouseover', changeImg);
  tvShows.addEventListener('mouseout', changeImg);

  const loading = document.createElement('div');
  loading.className = 'loading';
};
