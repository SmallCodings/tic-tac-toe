let gameboard = [];

const playerFactory = (playerNum, playerSymbol) => {
    const name = "Player " + playerNum;
    const symbol = playerSymbol;
    return {name, symbol};
}

const boxFactory = (board, boxNum) => {
    const box = document.createElement("div");
    box.classList.add("box");
    board.appendChild(box);

    let symbol = boxNum;

    box.addEventListener("click", () => {
        if(symbol == boxNum) {
            
        }
    })

    return {symbol, box};
}

function createPlayers() {
    player1 = playerFactory(1, "O");
    player2 = playerFactory(2, "X");
}

function createBoard() {
    const boardtop = document.querySelector("#game-board-top");
    const boardmiddle = document.querySelector("#game-board-middle");
    const boardbottom = document.querySelector("#game-board-bottom");

    for(let i = 0; i < 3; i++) {
        gameboard.push(boxFactory(boardtop, i));
    }
    for(let i = 0; i < 3; i++) {
        gameboard.push(boxFactory(boardmiddle, i + 3));
    }
    for(let i = 0; i < 3; i++) {
        gameboard.push(boxFactory(boardbottom, i + 6));
    }
}

function initialize() {
    createPlayers();
    createBoard();
}

let player1;
let player2;
let currentTurn = 1;

initialize();

