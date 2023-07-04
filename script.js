//  JS Arrays
const deckOfCards = [
  { order: 1, number: 1, dNumber: "A", symbol: "♠️" },
  { order: 2, number: 2, dNumber: "2", symbol: "♠️" },
  { order: 3, number: 3, dNumber: "3", symbol: "♠️" },
  { order: 4, number: 4, dNumber: "4", symbol: "♠️" },
  { order: 5, number: 5, dNumber: "5", symbol: "♠️" },
  { order: 6, number: 6, dNumber: "6", symbol: "♠️" },
  { order: 7, number: 7, dNumber: "7", symbol: "♠️" },
  { order: 8, number: 8, dNumber: "8", symbol: "♠️" },
  { order: 9, number: 9, dNumber: "9", symbol: "♠️" },
  { order: 10, number: 10, dNumber: "10", symbol: "♠️" },
  { order: 11, number: 11, dNumber: "J", symbol: "♠️" },
  { order: 12, number: 12, dNumber: "Q", symbol: "♠️" },
  { order: 13, number: 13, dNumber: "K", symbol: "♠️" },
  { order: 14, number: 1, dNumber: "A", symbol: "♥️" },
  { order: 15, number: 2, dNumber: "2", symbol: "♥️" },
  { order: 16, number: 3, dNumber: "3", symbol: "♥️" },
  { order: 17, number: 4, dNumber: "4", symbol: "♥️" },
  { order: 18, number: 5, dNumber: "5", symbol: "♥️" },
  { order: 19, number: 6, dNumber: "6", symbol: "♥️" },
  { order: 20, number: 7, dNumber: "7", symbol: "♥️" },
  { order: 21, number: 8, dNumber: "8", symbol: "♥️" },
  { order: 22, number: 9, dNumber: "9", symbol: "♥️" },
  { order: 23, number: 10, dNumber: "10", symbol: "♥️" },
  { order: 24, number: 11, dNumber: "J", symbol: "♥️" },
  { order: 25, number: 12, dNumber: "Q", symbol: "♥️" },
  { order: 26, number: 13, dNumber: "K", symbol: "♥️" },
  { order: 27, number: 1, dNumber: "A", symbol: "♦️" },
  { order: 28, number: 2, dNumber: "2", symbol: "♦️" },
  { order: 29, number: 3, dNumber: "3", symbol: "♦️" },
  { order: 30, number: 4, dNumber: "4", symbol: "♦️" },
  { order: 31, number: 5, dNumber: "5", symbol: "♦️" },
  { order: 32, number: 6, dNumber: "6", symbol: "♦️" },
  { order: 33, number: 7, dNumber: "7", symbol: "♦️" },
  { order: 34, number: 8, dNumber: "8", symbol: "♦️" },
  { order: 35, number: 9, dNumber: "9", symbol: "♦️" },
  { order: 36, number: 10, dNumber: "10", symbol: "♦️" },
  { order: 37, number: 11, dNumber: "J", symbol: "♦️" },
  { order: 38, number: 12, dNumber: "Q", symbol: "♦️" },
  { order: 39, number: 13, dNumber: "K", symbol: "♦️" },
  { order: 40, number: 1, dNumber: "A", symbol: "♣️" },
  { order: 41, number: 2, dNumber: "2", symbol: "♣️" },
  { order: 42, number: 3, dNumber: "3", symbol: "♣️" },
  { order: 43, number: 4, dNumber: "4", symbol: "♣️" },
  { order: 44, number: 5, dNumber: "5", symbol: "♣️" },
  { order: 45, number: 6, dNumber: "6", symbol: "♣️" },
  { order: 46, number: 7, dNumber: "7", symbol: "♣️" },
  { order: 47, number: 8, dNumber: "8", symbol: "♣️" },
  { order: 48, number: 9, dNumber: "9", symbol: "♣️" },
  { order: 49, number: 10, dNumber: "10", symbol: "♣️" },
  { order: 50, number: 11, dNumber: "J", symbol: "♣️" },
  { order: 51, number: 12, dNumber: "Q", symbol: "♣️" },
  { order: 52, number: 13, dNumber: "K", symbol: "♣️" },
]
let cardUsed = []
let playerPoints = []
let pcPoints = []

//  JS Variables
let playerAces = 0;
let pcAces = 0;
let didStand = false;
let turn = 0;

//  HTML Elements
const startDiv = document.getElementById('start-div');
const startButton = document.getElementById('start-button');
const gameDiv = document.getElementById('game-div');
const deckPlayer = document.getElementById('deck-player');
const deckPC = document.getElementById('deck-pc');
const hitButton = document.getElementById('hit-button');
const standButton = document.getElementById('stand-button');
const restartButton = document.getElementById('restart-button');
let pointsTable = document.getElementById('points-table');

//  Functions
//  Creating Card Elements in HTML
function createCard(player, displayNum, displaySym) {
  let container;
  if (player === 1) {
    container = deckPlayer;
  } else {
    container = deckPC;
  }
  var newElement = document.createElement("div");
  newElement.classList.add("position-relative", "card", "p-3");

  var topDiv = document.createElement("div");
  topDiv.classList.add("position", "absolute", "top-0", "start-0");

  var topSpan = document.createElement("span");
  topSpan.id = "top-card";
  topSpan.textContent = displayNum;

  topDiv.appendChild(topSpan);
  newElement.appendChild(topDiv);

  var bottomDiv = document.createElement("div");
  bottomDiv.classList.add("position", "absolute", "bottom-0", "end-0");

  var bottomSpan = document.createElement("span");
  bottomSpan.id = "bottom-card";
  bottomSpan.textContent = displaySym;

  bottomDiv.appendChild(bottomSpan);
  newElement.appendChild(bottomDiv);

  container.appendChild(newElement);
}

//  Random card 1-52
let randomCard = function randomNum52() {
  return Math.floor(Math.random() * 52.99);
}

//  Card have been used or not
function decideRandomNum() {
  let random = randomCard();
  if (cardUsed.includes(random)) {
    return decideRandomNum();
  }
  return random;
}

//  Use card and asign values
function hitACard(player) {
  const randomOrder = decideRandomNum();
  const drawnCard = deckOfCards.slice[randomOrder - 1];
  cardUsed.push(drawnCard.order);
  switch(player) {
    case 1:
      playerPoints.push(drawnCard.dNumber);
      break;
    case 2:
      pcPoints.push(drawnCard.dNumber);
      break;
  }
  return drawnCard;
}

//  Translate values to points
function sumCards(player) {
  let sum = 0;
  let ace11 = 0;
  switch (player) {
    case 1:
      for (let i = 0; i < playerPoints.length; i++) {
        if (playerPoints[i] === "A" && sum < 11) {
            sum += 11;
            playerAces++;
            ace11++;
          } else if (playerPoints[i] === "A" && sum > 10) {
            sum += 1;
            playerAces++;
          } else if (playerPoints[i] === "J" || playerPoints[i] === "Q" || playerPoints[i] === "K") {
            sum += 10;
          } else {
            sum += parseInt(playerPoints[i]);
          }
        if (ace11 > 0 && sum > 21) {
          sum -= 10;
          ace11--;
        }
      }
      break;
    case 2:
      for (let i = 0; i < pcPoints.length; i++) {
        if (pcPoints[i] === "A" && sum < 11) {
            sum += 11;
            pcAces++;
            ace11++;
          } else if (pcPoints[i] === "A" && sum > 10) {
            sum += 1;
            pcAces++;
          } else if (pcPoints[i] === "J" || pcPoints[i] === "Q" || pcPoints[i] === "K") {
            sum += 10;
          } else {
            sum += parseInt(pcPoints[i]);
          }
        if (ace11 > 0 && sum > 21) {
          sum -= 10;
          ace11--;
        }
      }
      break;
  }
  return sum;
}

let playerSum = sumCards(1);
let pcSum = sumCards(2);

//  Aces for the end of the play
function haveMoreAce(player) {
  switch (player) {
    case 1:
      return playerAces > pcAces;
    case 2:
      return pcAces > playerAces;
  }
}


// Restart Function
function cleanUsed(array) {
  array.length = 0;
}

function deleteCardElements(className) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

function restart() {
  cleanUsed(cardUsed);
  cleanUsed(playerPoints);
  cleanUsed(pcPoints);
  deleteCardElements('card');
  restartButton.classList.add('d-none');
  didStand = false;
  playerAces = 0;
  pcAces = 0;
}

function finalTurn() {
  restartButton.classList.remove('d-none');

}

//  Resolution of a turn
function resolveTurn() {
  pointsTable.innerHTML = 'Player - ' + playerSum + ' || Computer - ' + pcSum;
  if (playerSum === 21 || (playerSum === 21 && haveMoreAce(1))) {
    alert('Black Jack! You Won!');
    finalTurn();
  } else if (pcSum === 21 || (pcSum === 21 && haveMoreAce(2))) {
    alert('Black Jack! The computer won.');
    finalTurn();
  } else if (playerSum > 21) {
    alert('You overpassed 21. The computer won.');
    finalTurn();
  } else if (pcSum > 21) {
    alert('Computer overpassed 21. You Won!');
    finalTurn();
  } else if (didStand === true) {
    if (pcSum < 17) {
      turnOfPC();
    } else if (playerSum > pcSum) {
      alert('Your cards are closer to 21. You Won!');
      finalTurn();
    } else {
      alert('PC cards are closer to 21. The computer won.');
      finalTurn();
    }
  }
}

//  Turns
function turnOfPlayer(times) {
  turn++;
  const playerCard = hitACard(1);
  playerSum = sumCards(1);
  createCard(1, playerCard.dNumber, playerCard.symbol);
  if (playerSum === 21) {
    resolveTurn();
  } else if (times === 2) {
    turnOfPC();
  }
}

function turnOfPC() {
  if (pcSum < 17) {
    const pcCard = hitACard(2);
    createCard(2, pcCard.dNumber, pcCard.symbol);
  }
  resolveTurn();
}

//  Start Game
function startGame() {
  startDiv.classList.add('d-none');
  gameDiv.classList.remove('d-none');
  pointsTable.classList.remove('d-none');
  turnOfPlayer(1);
  turnOfPlayer(2);
  turnOfPC();
}

//  Hit
function hit() {
  didStand = false;
  turnOfPlayer(2);
}

//  Stand
function stand() {
  didStand = true;
  turnOfPC();
}

//  Controls
startButton.onclick = function () { startGame(); }
hitButton.onclick = function () { hit(); }
standButton.onclick = function () { stand(); }
restartButton.onclick = function () { restart(); }