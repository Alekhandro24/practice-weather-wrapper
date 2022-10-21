// // ------------version 1------------
// let input = document.getElementById('name-input');
// let nameOutput = document.getElementById('name-output');

// input.oninput = function () {
//   if (input.value === '') {
//     nameOutput.innerHTML = 'Anonymous';
//   } else {
//     nameOutput.innerHTML = input.value;
//   }
// };

// // ------------version 2------------
// const refs = {
//     nameInput: document.querySelector('#name-input'),
//     nameOutput:document.querySelector('#name-output'),
// }

// const onNameInput = (e) => {
//     const { value } = e.currentTarget;
//     refs.nameOutput.textContent = value.trim().length ? value : 'Anonymous';
// }

// refs.nameInput.addEventListener('input', onNameInput);

// ------------version 3------------
// const textInput = document.querySelector('#name-input');
// const textOutput = document.querySelector('#name-output');
// const textOutputContent = textOutput.firstChild;

// textInput.addEventListener('input', onInputText);

// function onInputText(e) {
//     e.currentTarget === '' ? (textOutputContent = textOutputContent.textContent) : (textOutput.textContent = e.currentTarget.value);
// }

// ------------version 4------------
// const inputName = document.querySelector('#name-input');
// const outputName = document.querySelector('#name-output');

// inputName.addEventListener('input', (e) => {
//     outputName.textContent = e.currentTarget.value;
//     if (e.currentTarget, value === '') {
//         outputName.textContent = 'Anonymous';
//     }
// })
