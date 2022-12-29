
let cards = []
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = '';

let messageEl = document.getElementById('message-el');
// let sumEl = document.getElementById('sum-el');
// doing same thing with query selector

let sumEl = document.querySelector('#sum-el'); // # and . has to be include 
let cardsEl = document.getElementById('cards-el');

let player ={
    name : "Yogi",
    chips: 145
}

let playerEl = document.getElementById('player-el');
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13 + 1);

    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber > 10) {
        return 10;
    } else {
        return randomNumber;
    }
    // return(Math.floor(Math.random()*13 + 1))
}

function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame();
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    if (sum <= 20) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message = 'You have got Blackjack!!'
        hasBlackjack = true;
    } else {
        message = 'You are out of the game!'
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let thirdCard = getRandomCard();
        sum += thirdCard;
        cards.push(thirdCard);
        console.log(cards);
        renderGame();
    }


}

