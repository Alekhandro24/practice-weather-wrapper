const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// ------------version 1------------
// const galleryList = document.querySelector('.gallery');

// const createGalleryItem = images.map(({ url, alt }) => {
//     return `<li><img src="${url}" alt=${alt} width="500"></li>`;
// });

// galleryList.insertAdjacentHTML("afterbegin", createGalleryItem.join(''));
// galleryList.setAttribute(
//     'style',
//     'list-style-type:none;display:flex: flex-direction:column;gap:50px;'
// );
// console.log(galleryList);

// ------------version 2------------

// const refs = {
//     gallery: document.queryCommandValue('ul .gallery')
// }

// const imagesMarkup = createGalleryMarkup(images);
// refs.gallery.insertAdjacentHTML("beforeend", imagesMarkup);

// function createGalleryMarkup(images) {
//     return images.map(({ url, alt }) => {
//         return `
//         <li class="gallery__item">
//           <img class="gallery__img" src="${url}" alt="${alt}" width="350">
//         </li>
//       `;
//     }).join('');
// }

// ------------version 3------------

// const listEl = document.querySelector('.gallery');
// const galleryItemMarkup = ({ url, alt }) => {
//     return `<li class="gallery__item">
//           <img class="gallery__img" src="${url}" alt="${alt}" width="720">
//        </li>`;
// }

// const galleryItemMap = images.map(galleryItemMarkup).join('');
// console.log(galleryItem);
// listEl.insertAdjacentHTML('afterbegin', galleryItemMap);

// ------------version 4------------

// const initialValue = '';
// const galleryItemMap = images.reduce((acc, { url, alt }) => {
//     return (
//         acc +
//         `<li class="gallery__item">
//            <img class="gallery__img" src="${url}" alt="${alt}" width="720">
//         </li>`
//     );
// }, initialValue);
// listEl.insertAdjacentHTML('afterbegin', galleryItemMap);

// ------------version 5------------
// const galleryContainer = document.querySelector('.gallery');

// const makeImageTableMarkup = ({ url, alt }) => `<li class="gallery__item">
//             <img class="gallery__img" src="${url}" alt="${alt}" width="720">
//          </li>`;

// const makeImageTable = [...images].map(makeImageTableMarkup).join('');
// galleryContainer.insertAdjacentHTML('afterbegin', makeImageTable);
