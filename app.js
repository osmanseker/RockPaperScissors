let playersocre = 0;
let aisocre = 0;
const playersocre_span = document.getElementById("player_score");
const aisocre_span = document.getElementById("ai_score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getAIChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(playerChoice, aiChoice) {
    playersocre++;
    playersocre_span.innerHTML = playersocre;
    aisocre_span.innerHTML = aisocre;
    result_p.innerHTML = convertToWord(playerChoice) + "beats" + convertToWord(aiChoice) + "You win!";
}

function lose() {
    aisocre++;
}

function draw() {

}

function Game(playerChoice) {
    const aiChoice = getAIChoice();
    switch (playerChoice + aiChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(playerChoice, aiChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(playerChoice, aiChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(playerChoice, aiChoice);
            break;
    }
}

function main() {

    rock_div.addEventListener('click', function () {
        Game("r")
    })

    paper_div.addEventListener('click', function () {
        Game("p")
    })

    scissors_div.addEventListener('click', function () {
        Game("s")
    })
}
main();