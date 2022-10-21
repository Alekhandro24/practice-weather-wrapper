import Notiflix from 'notiflix';

import pokemonCardTpl from '../tempates/pokemon-card.hbs';

const refs = {
  cardContainer: document.querySelector('.js-card-container'),
};

fetch('https://pokeapi.co/api/v2/pokemon/2')
  .then(response => {
    return response.json();
  })
  .then(pokemon => {
    console.log(pokemon);
    const markup = pokemonCardTpl(pokemon);
    refs.cardContainer.innerHTML = markup;
  })
  .catch(error => {
    console.log(error);
  });
