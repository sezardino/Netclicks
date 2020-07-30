export const IMG_URL = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

export default class DBService {
  constructor() {
    this.API_KAY = '777b90ee2268c6946e784ffda7072fd3';
    this.SERVER = 'https://api.themoviedb.org/3';
  }
  async getData(url) {
    const res = await fetch(url);
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(`Не удалось получить ответ от ${url}`);
    }
  }

  getTestData() {
    return  this.getData('test.json');
  }

  getTestCard() {
    return this.getData('card.json');
  }

  getSearchResult(query) {
    return this.getData(`${this.SERVER}/search/tv?api_key=${this.API_KAY}&query=${query}&language=ru-RU&page=1&include_adult=true`);
  }

  getTVShow(id) {
    return this.getData(`${this.SERVER}/tv/${id}?api_key=${this.API_KAY}&language=ru-RU`);
  }
}

const renderCard = function(response) {
  showList.textContent = '';
  response.results.forEach((item) => {

    let {
      vote_average: vote,
      poster_path: poster,
      backdrop_path: backdrop,
      name: title,
      id
    } = item;
    if (!poster && backdrop) {
      poster = IMG_URL + backdrop;
    }else if(!poster || !backdrop) {
      poster = 'img/no-poster.jpg';
      backdrop = '';
    }else {
      poster = IMG_URL + poster;
      backdrop = IMG_URL + backdrop;
    }
    let createVote;

    if (vote) {
      createVote = `<span class="tv-card__vote">${vote}</span>`;
    } else {
      createVote = '';
    }



    const card = document.createElement('li');
    card.classList.add('tv-shows__item');
    card.innerHTML = `
      <a href="#" id="${id}" class="tv-card">
          ${createVote}
          <img class="tv-card__img"
              src="${poster}"
              data-backdrop="${backdrop}"
              alt="${title}">
          <h4 class="tv-card__head">${title}</h4>
      </a>
    `;

    loading.remove();
    showList.append(card);
  });
};
