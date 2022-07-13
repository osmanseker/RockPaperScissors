const playersocre = 0;
const aisocre = 0;
const playersocre_span = document.getElementById("player_score");
const aisocre_span = document.getElementById("ai_score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function Game(playerChoice){
    console.log(" choice is " + playerChoice);
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