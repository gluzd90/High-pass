const search = document.querySelector('.search__form');
const closed = document.querySelector('.search__input-closed');
const searchBtn = document.querySelector('.header__btn');
searchBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  e.preventDefault();
  search.classList.add('search__form--active');
 
})
closed.addEventListener('click', function () {
 search.classList.remove('search__form--active');
})
