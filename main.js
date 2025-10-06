const adviceNumber = document.querySelector('.advice__number');
const adviceText = document.querySelector('.advice__text');
const diceButton = document.querySelector('.advice__random--btn');

function handleFetchAdvice() {
    const adviceId = Math.floor(Math.random() * 225) + 1;;
    fetch(`https://api.adviceslip.com/advice/${adviceId}`)
    .then(res => res.json())
    .then(data => {
        adviceNumber.textContent = `${data.slip.id}`;
        adviceText.textContent = `"${data.slip.advice}"`;
    });
}

window.addEventListener('DOMContentLoaded', handleFetchAdvice);
diceButton.addEventListener('click', handleFetchAdvice);