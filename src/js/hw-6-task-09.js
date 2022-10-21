// // --------- variation 1 ---------

// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const changeButton = document.querySelector('button.change-color');
// const body = document.querySelector('body');
// const colorValue = document.querySelector('span.color');

// changeButton.addEventListener('click', e => {
//     let color = getRandomHexColor();
//     body.style.backgroundColor = color;
//     colorValue.textContent = color;
// })

// // --------- variation 2 ---------

// const refs = {
//     body: document.querySelector('body'),
//     colorChangeBtn:document.querySelector('.change-color'),
//     colorValue:document.querySelector('.color'),
// }

// // #Default color value
// setColorValue('#ffffff');

// refs.colorChangeBtn.addEventListener('click', onColorChange);

// function onColorChange() {
//     const color = getRandomHexColor();
//     setBodyBgColor(color);
//     setColorValue(color);
// }

// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function setBodyBgColor(color) {
//     refs.body.style.backgroundColor = color;
// }

// function setColorValue(color) {
//     refs.colorValue.textContent = color;
// }

// // --------- variation 3 ---------

// const refs = {
//     getBody: document.body,
//     changeColorButton:document.querySelector('.change-color'),
//     getColorInfoEl:document.querySelector('.color'),
// }

// refs.changeColorButton.addEventListener('click', onBgcChange);

// function onColorChange() {
//     refs.getBody.style.backgroundColor = getRandomHexColor();
//     refs.getColorInfoEl.textContent = getRandomHexColor();
// }

// // --------- variation 4 ---------

// const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

// document.querySelector('button.change-color').addEventListener('click', () => {
//     const color = getRandomHexColor();
//     document.querySelector('body').style.backgroundColor = color
//     document.querySelector('span.color').textContent = color;
// })
