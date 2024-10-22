const choiceList = ["Taş", "Kağıt", "Makas"];
let randomNumber = 0;

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  return (choiceList[randomNumber]);
};

rock.addEventListener('click', handleRockBtn);
paper.addEventListener('click', handlePaperBtn);
scissors.addEventListener('click', handleScissorsBtn);

function handleRockBtn() {
  const computerChoiceValue = getComputerChoice();
  computerChoice.innerHTML = `<button>${computerChoiceValue}</button>`;
  winnerBtnTxt.innerHTML = "";
  if (computerChoiceValue === "Kağıt") {
    computerScore++;
    computerScoreTxt.innerText = computerScore;
    winnerBtnTxt.innerHTML += 'Bilgisayar';
  } else if (computerChoiceValue === "Makas") {
    userScore++;
    userScoreTxt.innerText = userScore;
    winnerBtnTxt.innerHTML += 'Oyuncu';
  } else if (computerChoiceValue === "Taş") {
    winnerBtnTxt.innerHTML = "Yok";
  }

}

function handlePaperBtn() {
  const computerChoiceValue = getComputerChoice();
  computerChoice.innerHTML = `<button>${computerChoiceValue}</button>`;
  winnerBtnTxt.innerHTML = "";
  if (computerChoiceValue === "Makas") {
    computerScore++;
    computerScoreTxt.innerText = computerScore;
    winnerBtnTxt.innerHTML += 'Bilgisayar';
  } else if (computerChoiceValue === "Taş") {
    userScore++;
    userScoreTxt.innerText = userScore;
    winnerBtnTxt.innerHTML += 'Oyuncu';
  } else if (computerChoiceValue === "Kağıt") {
    winnerBtnTxt.innerHTML = "Yok";
  }
}

function handleScissorsBtn() {
  const computerChoiceValue = getComputerChoice();
  computerChoice.innerHTML = `<button>${computerChoiceValue}</button>`;
  winnerBtnTxt.innerHTML = "";

  if (computerChoiceValue === "Taş") {
    computerScore++;
    computerScoreTxt.innerText = computerScore;
    winnerBtnTxt.innerHTML += 'Bilgisayar';
  } else if (computerChoiceValue === "Kağıt") {
    userScore++;
    userScoreTxt.innerText = userScore;
    winnerBtnTxt.innerHTML += 'Oyuncu';
  } else if (computerChoiceValue === "Makas") {
    winnerBtnTxt.innerHTML = "Yok";
  }
}

let userScore = 0;
let computerScore = 0;

clearBtn.addEventListener("click", handleClearBtn);
function handleClearBtn() {
  userScoreTxt.innerText = 0;
  computerScoreTxt.innerText = 0;
  winnerBtnTxt.innerHTML = "";
  computerChoice.innerHTML = "";
  userScore = 0;
  computerScore = 0;
}
