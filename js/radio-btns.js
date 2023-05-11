const cardList = document.querySelector('.card-set');
const allCards = document.querySelectorAll('.card-set__item');
const btnList = document.querySelector('.buttons-list');

const allCardsArr = Array.from(allCards);

btnList.addEventListener('click', changeList);

function changeList(e) {
  if (e.target.nodeName !== 'BUTTON') return;

  const neededEls =
    e.target.dataset.type === 'all'
      ? allCardsArr
      : allCardsArr.filter(el => el.dataset.type === e.target.dataset.type);

  const markup = neededEls
    .map(el => `<li class="card-set__item" data-type="${el.dataset.type}">${el.innerHTML}</li>`)
    .join('');

  cardList.innerHTML = markup;
}
