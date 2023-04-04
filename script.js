//your JS code here. If required.
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const ageInput = document.querySelector('#age');
const btn = document.querySelector('#btn');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (!nameInput.value || !ageInput.value) {
    alert('Please enter your name and age.');
    return;
  }
  
  const age = parseInt(ageInput.value);
  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve();
      } else {
        reject();
      }
    }, 4000);
  });
  
  promise
    .then(() => {
      alert(`Welcome, ${nameInput.value}. You can vote.`);
    })
    .catch(() => {
      alert(`Oh sorry ${nameInput.value}. You aren't old enough.`);
    });
});