// // --------- variation 1 ---------
// const inputNum = document.querySelector('#controls>input');
// const btnCreate = document.querySelector('button[data-create]');
// const btnDestroy = document.querySelector('button[data-destroy]');
// const boxes = document.querySelector('#boxes');

const { create } = require('lodash');

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const createBoxes = amount => {
//     const elementsToAdd = [];
//     for (let i = 0; i < amount; i +=1) {
//         const div = document.createElement('div')
//         div.style.height = `${30 + 10 * i}px`;
//         div.style.width=`${30+10 * i}px`
//         div.style.background = getRandomHexColor();
//         elementsToAdd.push(div);
//     }
//     return elementsToAdd;
// }

// const destroyBoxes = () => {
//     boxes.innerHTML = '';
// }

// btnCreate.addEventListener('click', () => {
//     let boxesToAdd = createBoxes(inputNum.value)
//     boxes.append(...boxesToAdd)
// })

// console.log(inputNum.value);

// btnCreate.addEventListener('click', () => {
//     destroyBoxes.call()
// });

// // --------- variation 2 ---------

// const refs = {
//   numberInput: document.querySelector('#controls input'),
//   createBtn: document.querySelector('[data-create]'),
//   destroyBtn: document.querySelector('[data-destroy]'),
//   boxesContainer: document.querySelector('#boxes'),
// };

// refs.createBtn.addEventListener('click', onCreateBtnClick);
// refs.destroyBtn.addEventListener('click', onDestroyBtnClick);

// function onCreateBtnClick(e) {
//   createBoxes(refs.numberInput.value);
// }

// function onDestroyBtnClick(e) {
//   destroyBoxes();
//   refs.numberInput.value = '';
// }
// function createBoxes(amount) {
//   const SIZE_INCREMENT = 10;
//   const boxItems = [];
//   const boxSize = {
//     heihgt: 20,
//     width: 20,
//   };
//   const boxToStart = refs.boxesContainer.lastElementChild || boxSize;
//   let { style: { heihgt, width } = boxSize } = boxToStart;
//   for (let i = 0; i < amount; i += 1) {
//     heihgt = parseInt(heihgt) + SIZE_INCREMENT;
//     width = parseInt(width) + SIZE_INCREMENT;
//     boxItems.push(createNewBox(heihgt, width));
//   }
//   refs.boxesContainer.append(...boxItems);
// }

// function createNewBox(heihgt, width) {
//   const box = document.createElement('div');
//   box.style.height = `${height}px`;
//   box.style.width = `${width}px`;
//   box.style.backgroundColor = getRandomHexColor();
//   return box;
// }

// function destroyBoxes() {
//   refs.boxesContainer.innerHTML = '';
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// // --------- variation 3 ---------
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const controlEl = document.querySelector('#control');
// const boxesEl = document.querySelector('#boxes');

// const refs = {
//   inputEl: controlEl.firstElementChild,
//   createBtn: document.querySelector('[data-create]'),
//   destroyBtn: document.querySelector('[data-destroy]'),
// };

// refs.inputEl.addEventListener('input', onNumberGet);
// refs.createBtn.addEventListener('click', createBoxes);
// refs.destroyBtn.addEventListener('click', destroyBoxes);

// function onNumberGet(e) {
//   return e.currentTarget.value;
// }

// function createBoxes() {
//   let size = 20;
//   const boxElArr = [];
//   for (let index = 0; index < refs.inputEl.value; index++) {
//     const box = document.createElement('div');
//     size += 10;
//     box.style.height = `${size}px`;
//     box.style.width = `${size}px`;
//     box.style.backgroundColor = getRandomHexColor();
//     boxElArr.push(box);
//   }
//   boxesEl.append(...boxElArr);
// }

// function destroyBoxes() {
//   boxesEl.innerHTML = '';
// }

// // --------- variation 4 ---------

// const getRandomHexColor = () =>
//   `#${Math.floor(Math.random() * 16777215).toString(16)}`;

// const inputNum = document.querySelector('#controls>input');
// const boxes = document.querySelector('#boxes');

// const createBoxes = quantity => {
//   const elementsToAdd = [];
//   for (let i = 0; i < quantity; i += 1) {
//     const div = document.createElement('div');
//     div.style.height = `${30 + 10 * i}px`;
//     div.style.width = `${30 + 10 * i}px`;
//     div.style.background = getRandomHexColor();
//     elementsToAdd.push(div);
//   }
//   return elementsToAdd;
// };

// document
//   .querySelector('[data-create]')
//   .addEventListener('click', () =>
//     boxes.append(...createBoxes(inputNum.value))
//   );

// document
//   .querySelector('[data-destroy]')
//   .addEventListener('click', () => (boxes.innerHTML = ''));
