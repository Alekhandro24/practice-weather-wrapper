// // ------------version 1------------
// const button = {
//   add: document.querySelector("[data-action='increment]"),
//   sub: document.querySelector("[data-action='decrement']"),
//   span: document.querySelector('#value'),
// };
// let counterValue = 0;

// const increment = () => {
//   counterValue += 1;
//   button.span.textContent = counterValue;
// };

// const decrement = () => {
//   counterValue -= 1;
//   button.span.textContent = counterValue;
// };
// add;
// button.add.addEventListener('click', increment);
// button.sub.addEventListener('click', decrement);

// // ------------version 2------------
// let counterValue = 0;
// const refs = {
//   counterIncrement: document.querySelector("[data-action='increment']"),
//   counterDecrement: document.querySelector("[data-action='decrement']"),
//   counterText: document.querySelector('#value'),
// };

// const onCounterDecrement = (e) => {
//     counterValue -= 1;
//     setCounterText();
// }

// const onCounterIncrement = (e) => {
//   counterValue += 1;
//   setCounterText();
// };

// refs.counterDecrement.addEventListener('click', onCounterDecrement);
// refs.counterInrement.addEventListener('click', onCounterIncrement);

// function setCounterText() {
//     refs.counterText.textContent = counterValue;
// }

// // ------------version 3------------
// const btnDecrement = document.querySelector("button[data-action='decrement']");
// const btnIncrement = document.querySelector("button[data-action='increment']");
// const counter = document.querySelector('#value');

// let counterValue = 0;

// btnDecrement.addEventListener('click', () => {
//     counterValue -= 1;
//     counter.textContent = counterValue
// })

// btnIncrement.addEventListener('click', () => {
//   counterValue += 1;
//   counter.textContent = counterValue;
// });
