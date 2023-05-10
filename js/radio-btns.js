const cardList = document.querySelector('.card-set');
const allCards = document.querySelectorAll('.card-set__item');
const btnList = document.querySelector('.buttons-list');

const allCardsArr = Array.from(allCards);

btnList.addEventListener('click', changeList);

function changeList(e) {
  console.log('qwe');
  if (e.target.nodeName !== 'BUTTON') return;

  allCards.forEach(el => el.remove());
  const neededEls = allCardsArr.filter(el => el.dataset.type === e.target.dataset.type);
  neededEls.map(el => cardList.appendChild(el));

  if (e.target.dataset.type === 'all') {
    allCardsArr.map(el => cardList.appendChild(el));
  }
}
