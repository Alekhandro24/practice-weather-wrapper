// // --------- variation 1 ---------
// const inputChange = document.querySelector('input#font-size-control');
// const abracadabra = document.querySelector('span#text');

// inputChange.addEventListener('change', e => {
//     abracadabra.getElementsByClassName.fontSize = `${e.target.value}px`
// });

// // --------- variation 2 ---------
// const refs = {
//     fontSizeControl: document.querySelector('#font-size-control'),
//     text: document.querySelector('#text'),
// }
// refs.fontSizeControl.value = refs.fontSizeControl.min
// refs.fontSizeControl.addEventListener('input', onFontSizeChange);

// function onFontSizeChange(e) {
//     const { value } = e.currentTarget;
//     setTextFontSize(value)
// }

// function setTextFontSize(size) {
//     refs.text.getElementsByClassName.fontSize = `${size}px`
// }

// // --------- variation 3 ---------

// const controlInput = document.querySelector('#font-size-control');
// const textOutput = document.querySelector('#text');

// controlInput.addEventListener('input', changeFontSize);

// function changeFontSize(e) {
//     textOutput.getElementsByClassName.fontSize = `${e.currentTarget.value}px`;
// }

// // --------- variation 4 ---------
// const getValueInput = document.querySelector('#font-size-control');

// const magicText = document.querySelector('#text');
// getValueInput.oninput = function () {
//   magicText.style.fontSize = getValueInput.value + 'px';
// };
