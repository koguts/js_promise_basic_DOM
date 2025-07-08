'use strict';

// write your code here
const logoElement = document.querySelector('.logo');
const newDiv = document.createElement('div');
newDiv.classList.add('message');
newDiv.textContent = "Promise was resolved!";
const body = document.querySelector('body');

const newDiv2 = document.createElement('div');
newDiv2.classList.add('message error-message');
newDiv2.textContent = "Promise was rejected!";

logoElement.addEventListener('click', () => {
const promise1 = new Promise((resolve, reject) => {
  resolve('Promise was resolved!');
})

promise1
.then(() => body.appendChild(newDiv))
.catch(() => body.appendChild(newDiv2));
}
)

const promise2  = new Promise((resolve, reject) => {
  setTimeout(() =>{
    reject('Promise was rejected!');
  }, 3000)
})

promise2
  .catch(() => body.appendChild(newDiv2));




