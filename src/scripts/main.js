'use strict';

// write your code here
const logoElement = document.querySelector('.logo');

const body = document.querySelector('body');

logoElement.addEventListener('click', () => {
const promise1 = new Promise((resolve, reject) => {
  resolve('Promise was resolved!');
})

promise1
.then(() => {
  const div = document.createElement('div');
  div.classList.add('message');
  div.textContent = 'Promise was resolved!';
  body.appendChild(div);

})
.catch(() =>{
  const div = document.createElement('div');
  div.classList.add('message', 'error-message');
  div.textContent = "Promise was rejected!";
  body.appendChild(div);
});


const promise2  = new Promise((resolve, reject) => {
  setTimeout(() =>{
    reject(new Error('Promise was rejected!'));
  }, 3000)
})

promise2
  .catch(() =>{
  const div = document.createElement('div');
  div.classList.add('message', 'error-message');
  div.textContent = "Promise was rejected!";
  body.appendChild(div);
  })

})
