const computerChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");

let userChoiceSelected;
let computerChoiceSelected;
let result;

possibleChoices.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    userChoiceSelected = e.target.id;
    userChoice.innerHTML = userChoiceSelected;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
  if (randomNumber === 1) {
    computerChoiceSelected = "rock";
  } else if (randomNumber === 2) {
    computerChoiceSelected = "scissors";
  } else if (randomNumber === 3) {
    computerChoiceSelected = "paper";
  }
  computerChoice.innerHTML = computerChoiceSelected;
}

function getResult() {
  if (computerChoiceSelected === userChoiceSelected) {
    result = "it's a draw";
  } else if (
    computerChoiceSelected === "rock" &&
    userChoiceSelected === "paper"
  ) {
    result = "you win";
  } else if (
    computerChoiceSelected === "rock" &&
    userChoiceSelected === "scissors"
  ) {
    result = "you lose";
  } else if (
    computerChoiceSelected === "paper" &&
    userChoiceSelected === "scissors"
  ) {
    result = "you win";
  } else if (
    computerChoiceSelected === "paper" &&
    userChoiceSelected === "rock"
  ) {
    result = "you lose";
  } else if (
    computerChoiceSelected === "scissors" &&
    userChoiceSelected === "rock"
  ) {
    result = "you win";
  } else if (
    computerChoiceSelected === "scissors" &&
    userChoiceSelected === "paper"
  ) {
    result = "you lose";
  }
  resultDisplay.innerHTML = result;
}
