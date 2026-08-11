const messages = [
    "sure kana?",
    "Really sure??",
    "Bebuu please...",
    "Don't do this to me :(",
    "Iki-kiss kita super dami! 😳",
    "aba ayaw ah!",
    "you don't love me anymore?!",
    "kapag nag mo ka, I'm gonna cry",
    "sige, hayaan mo na lang ako dito sa gilid...",
    "huhuhu imma cry....",
    "sinaktan mo hart ko...",
    "ayaw talaga ah... 💔",
    "Pretty please Alondre ko? 🍒",
    "Ok fine, I will stop asking...",
    "Just kidding, MAG YES KANA! ❤️"
];
let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}