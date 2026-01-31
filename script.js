const buttons = document.querySelectorAll("button");
const message = document.querySelector("#message");
const userEl = document.getElementById("user-score");
const computerEl = document.getElementById("computer-score");

let userScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const computerChoice = computerPlan();
        const userChoice = button.id;
        const result = getResult(userChoice, computerChoice);
        message.innerHTML = result;
        userEl.innerHTML = userScore;
        computerEl.innerHTML = computerScore;
    })
})

function computerPlan() {
    const choices = ["rock", "paper", "scissors"];
    const getIndex = Math.floor(Math.random() * choices.length);
    return choices[getIndex]
}

function getResult(user, computer) {
    if (user === computer) {
        return "It's a tie!";
    } else if (user === "rock" && computer === "scissors" || user === "scissors" && computer === "paper" || user === "paper" && computer === "rock") {
        userScore++;
        return `You win! ${user} beats ${computer}`;
    } else {
        computerScore++;
        return `You lose! ${computer} beats ${user}`;
    }
}