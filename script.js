//your JS code here. If required.
const form = document.querySelector('form');
const ageInput = document.getElementById('age');
const nameInput = document.getElementById('name');
const submitBtn = document.getElementById('btn');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const age = parseInt(ageInput.value);
  const name = nameInput.value;

  if (!age || !name) {
    alert('Please fill in both age and name');
    return;
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve({ age, name });
      } else {
        reject();
      }
    }, 4000);
  });

  promise
    .then((obj) => obj.age)
    .then((age) => ({ canVote: true, age }))
    .then(({ canVote, age }) => {
      if (canVote) {
        alert(`Welcome, ${name}. You can vote.`);
      } else {
        alert(`Oh sorry ${name}. You aren't old enough.`);
      }
    })
    .catch(() => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
