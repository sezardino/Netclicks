import DBService, {renderCard} from '../services/utils';

export default search = () => {
  const searchForm = document.querySelector('.search__form');
  const searchInput = document.querySelector('.search__form-input');

  const onSearchFormSubmit = function(evt) {
    evt.preventDefault()
    const searchValue = searchInput.value.trim();
    if(searchValue) {
      searchInput.value = '';
      tvShows.append(loading);
      new DBService().getSearchResult(searchValue).then(renderCard);
    }
  };

  searchForm.addEventListener('submit', onSearchFormSubmit);
};
