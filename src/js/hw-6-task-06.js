// // ------------version 1------------

// const textInput = document.querySelector('#validation-input');
// console.log(textInput.getAttribute('data-length'));

// textInput.addEventListener('blur', e => {
//   if (e.target.value.length === textInput.getAttribute('data-length')) {
//     textInput.classList.add('valid');
//     if (textInput.classList.contains('invalid')) {
//       textInput.classList.remove('invalid');
//     }
//   } else {
//     if (textInput.classList.contains('valid')) {
//       textInput.classList.remove('valid');
//     }
//     textInput.classList.add('invalid');
//   }
// });

// // ------------version 2------------
// const refs = {
//   input: document.querySelector('#validation-input'),
// };

// refs.input.addEventListener('blur', onInputValidation);

// function onInputValidation(e) {
//     const {
//         currentTarget: input,
//         currentTarget: { value, dataset }
//     } = e;
//     const isValid = value.trim().length === Number(dataset.length);
//     addValidationClasses(input, isValid)
// }

// function addValidationClasses(input, isValid) {
//     const classsesName = ["invalid", "valid"];
//     if (isValid) {
//         classsesName.reverse()
//     }
//     input.classList.add(classsesName[0]);
//     input.classList.remove(classsesName[1]);
// }

// // ------------version 3------------
// const textInput = document.querySelector('#validation-input');
// textInput.addEventListener('focus', onInputClassRemove);
// textInput.addEventListener('blur', checkInputLength);

// function checkInputLength(e) {
//   e.currentTarget.value.length === Number(textInput.dataset.length)
//     ? textInput.classList.add('valid')
//     : textInput.classList.add('invalid');
// }

// function onInputClassRemove () {
//     textInput.classList.remove('valid');
//     textInput.classList.remove('invalid');
// }

// // ------------version 4------------

// const numberInput = document.querySelector('#validation-input');

// numberInput.addEventListener('blur', e => {
//     const inputLength = e.target.value.length;
//     const varificationNumber = Number(numberInput.getAttribute('datd-length'));

//     if (inputLength === varificationNumber) {
//         numberInput.classList.remove('invalid');
//         numberInput.classList.add('valid');
//     }
//     if (inputLength !== varificationNumber) {
//         numberInput.classList.remove('valid');
//         numberInput.classList.add('invalid');
//     }
// })
