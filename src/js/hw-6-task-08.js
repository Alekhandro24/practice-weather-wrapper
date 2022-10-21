// // --------- variation 1 ---------

const { values } = require('lodash');

// const form = document.querySelector('.login-form');
// form.addEventListener('submit', handlSubmit);

// function handlSubmit(e) {
//     e.prevenrDefault();

//     const {
//         elements: { email, password },
//     } = e.currentTarget;

//     if (email.value === '' || password.value === '') {
//         return alert('Please fill in all the fields!');
//     }
//     const userDetails = { email: email.value, password: password.value };
//     console.log(userDetails);
//     e.currentTarget.reset();
// }

// // --------- variation 2 ---------
// const refs = {
//   loginForm: document.querySelector('.login-form'),
// };

// refs.loginForm.addEventListener('submit', onLoginFormSubmit);

// function onLoginFormSubmit(e) {
//     const {
//         currentTarget: form,
//         currentTarget: { elements: { email, password }, }
//     } = e;
//     e.preventDefault();
//     validatorLoginForm(email.value, password.value) && form.reset();
// }

// function validatorLoginForm(email, password) {
//     if (email === '' || password === '') {
//         alert("Please fill in all the fields!")
//         return false;
//     }
//     console.log({ email, password });
//     return true;
// }

// // --------- variation 3 ---------

// const form = document.querySelector('.login-form');
// form.addEventListener('submit', onFormSubmit);
// function onFormSubmit(e) {
//     e.preventDefault();
//     const formElements = e.elements.currentTarget;
//     const mail = formElements.email.value;
//     const password = formElements.password.value;
//     if (password === '' || mail === '') {
//         alert('fill all fields wuth data')
//     } else {
//         console.log({ email, password });
//         form.reqset();
//     }
// }

// // --------- variation 4??? ---------
// const form = document.querySelector('.login-form');
// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(e) {
//     e.preventDefault();
//     const formData = new formData(e.currentTarget);

//     formData.forEach((value, name) => {
//         if (value !== '') {
//             console.log({name.value})
//         }
//         alert('fill all field')
//     })
//     form.reset()
// }

// // --------- variation 5 ---------

// const form = document.querySelector('.login-form');
// form.addEventListener('submit', handleSubmit);

// function handleSubmit(e) {
//     e.preventDefault();
//     const { elements: { email, password } } = e.currentTarget;
//     if (email.value === '' || password.value ==='') {
//         return alert('fill all fiekds');
//     }
//     const userDetails = { email: email.value, password: password.value };
//     console.log('userDetails', userDetails);
//     e.currentTarget.reset();
// }
