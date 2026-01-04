function getComputerChoice() {
    let AIchoice = Math.random();

    if (AIchoice < 0.34) {
        return "rock";  
    }
    else if (AIchoice <= 0.67) {
        return "paper";
    }
    else {
        return "scissor";
    }
}

let userScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
  button.addEventListener("click", handleClick);
});

function handleClick(event) {
  const userChoice = event.target.dataset.set;
  const computerChoice = getComputerChoice();
  document.querySelector('.result').innerHTML = "Computer choice is: " + computerChoice;

  let verdict = "";
    if (userChoice === computerChoice) {
        verdict = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissor" && computerChoice === "paper")
    ) {
        verdict = "You win!";
    } else {
        verdict = "Computer wins!";
    }
  document.querySelector('.verdict').innerHTML = verdict;
  
  if (verdict === "You win!") {
      userScore++;
  }
  else if (verdict === "Computer wins!") {
      computerScore++;
  }

  document.querySelector('#user-score').innerHTML = userScore;
  document.querySelector('#comp-score').innerHTML = computerScore;
}


