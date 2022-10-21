// ------------version 1------------

// const totalCategories = document.querySelectorAll('.item');
// console.log(`Number of categories: ${totalCategories.length}`);

// const categoriesArray = [...totalCategories]
//   .map(
//     category => `Category: ${category.firstElementChild.textContent}
//   Elements: ${category.children[1].children.length}`
//   )
//   .join('\n');

// console.log(categoriesArray);

// ------------version 2------------

// const refs = {
//     categoriesItem: document.querySelectorAll('#categories .item'),
// }
// console.log('Numbers of categories: ', refs.categoriesItem.length);

// refs.categoriesItem.forEach((item) => {
//     console.log('Categories', item.querySelector("h2").textContent);
//     console.log('Elements', item.querySelectorAll('li').length);
// });

// ------------version 3------------

// const listItemEl = document.querySelectorAll('.item');
// console.log('Number of categories: listItemEl.length');

// listItemEl.forEach(item => {
//     item.querySelectorAll('.h2').forEach(title => {
//         console.log('Category: ', title.textContent);
//     });
//     console.log('Elements', item.querySelectorAll('li').length);
// });

// ------------version 4------------

// const totalCategories = document.querySelectorAll('.item');
// const categoriesArray = [...totalCategories].map(
//   categories =>
//     `Categories : ${categories.children[0].textContent} Elements:${categories.children[1].children.length} `
// ).join('\n');
// console.log('Number of categories: ${totalCategories.length}');
// console.log(categoriesArray);

// ------------version 5------------

// totalCategories.forEach(item => {
//     console.log(`Category: ${item.firstElementChild.textContent}`);
//     console.log(`Elements: ${item.lastElementChild.children.length}`);
// });
