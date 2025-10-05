const adviceNumber = document.querySelector('.advice__number');
const adviceText = document.querySelector('.advice__text');

window.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        adviceNumber.textContent = `${data.slip.id}`;
        adviceText.textContent = `"${data.slip.advice}"`;
    });
});