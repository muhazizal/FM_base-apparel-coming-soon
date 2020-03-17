const email = document.querySelector("input[type='email']");
const error = document.querySelector("#error");
const form = document.querySelector("#form");
const btn = document.querySelector("button[type='submit']");
const danger = document.querySelector("#danger");
const arrow = 'url(images/icon-arrow.svg)';

btn.addEventListener('click', (e) => {
  if (email.value === '' || email.value == null || email.value.indexOf('@') == -1) {
    error.innerText = 'Please provide a valid email';
    error.style.color = 'crimson';
    error.style.fontWeight = 'bold';
    error.style.visibility = 'visible';
    email.style.border = '0.2rem solid crimson';
    btn.style.backgroundImage = arrow + 'linear-gradient(135deg, hsl(0, 80%, 100%), hsl(0, 74%, 74%))';
    btn.style.backgroundSize = '1.8rem'+'cover';
    danger.style.visibility = 'visible';
    e.preventDefault();
  }
});