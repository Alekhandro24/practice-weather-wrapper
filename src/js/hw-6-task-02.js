// ------------version 1------------

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ulList = document.getElementById('ingridients');

// const foodIngredients = ingredients.forEach(ingredient => {
//   let item = docement.createElement('li');
//   item.textContent = ingredient;
//   item.classList.add('item');
//   ulList.append(item);
//   console.log(item);
// });

// ------------version 2------------

// const refs = {
//     ingredientList : document.querySelector('#ingredients'),
// }
// const ingredientsItem = ingredients.map(createIngredientElement);
// refs.ingredientsList.append(...ingredientsItem);

// function createIngredientElement(ingredient) {
//     const item = document.createElement('li');
//     item.classList.add('item');
//     item.textContent = ingredient;
//     return item;
// }

// ------------version 3------------

// const listEl = document.querySelector('#ingredients');
// const makeList = options => {
//     return options.map(element => {
//         const itemEl = document.createElement('li');
//         itemEl.classList.add('item');
//         itemEl.textContent = element;
//         return itemEl;
//     })
// }
// listEl.append(...makeList(ingredients))

// ------------version 4------------
// const ingredientsContainer = document.querySelector('#ingredients');
// const elIngredients = [...ingredients].map(ingredient => {
//     const ingredientEl = document.createElement('li');
//     ingredientEl.classList.add('item');
//     ingredientEl.textContent = ingredient;
//     return ingredientEl;
// })
// ingredientsContainer.append(...elIngredients);
// // document.querySelector('#ingredients').append(...elIngredients);

// ------------version 5------------

// document.querySelector('#ingredients').append(...ingredients.map(ingredient => {
//   const ingredientEl = document.createElement('li');
//     ingredientEl.classList.add('item');
//     ingredientEl.textContent = ingredient;
//     return ingredientEl;
// }));
