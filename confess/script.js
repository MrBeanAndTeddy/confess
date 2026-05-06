const messages = [
    "Är du säker?",
    "Verkligen säker??",
    "Var positiv?",
    "Pookie snälla...",
    "Bara tänk på det!",
    "Om du säger nej, kommer jag bli riktigt ledsen...",
    "Jag kommer bli riktigt ledsen...",
    "Jag kommer bli riktigt riktigt ledsen...",
    "Ok visst, jag kommer sluta fråga...",
    "Jag skojar bara, säg ja tack! ❤️"
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
    window.location.href = "yes.html";
}