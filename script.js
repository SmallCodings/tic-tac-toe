let gameboard = [];

const symbolModule = (() => {
    const guiCurrentTurn = document.querySelector("#current-turn");
    let currentTurn = 1;

    function changeTurns() {
        currentTurn += 1;
        if(currentTurn % 2 == 1) {
            guiCurrentTurn.textContent = "Player 1 Turn";
        }
        else {
            guiCurrentTurn.textContent = "Player 2 Turn";
        }
    }

    function getSymbol(boxNum) {
        if(currentTurn % 2 == 1) {
            gameboard[boxNum].symbol = player1.symbol;
            gameboard[boxNum].symbol = player1.symbol;
        }
        else {
            gameboard[boxNum].symbol = player2.symbol;
            gameboard[boxNum].symbol = player2.symbol;
        }
        changeTurns();
    }

    function addSymbol(boxNum) {
        const symbolContainer = document.createElement("div");
        symbolContainer.classList.add("symbol");
        symbolContainer.classList.add("symbol" + gameboard[boxNum].symbol);
        gameboard[boxNum].box.appendChild(symbolContainer);
        const symbol = document.createTextNode(gameboard[boxNum].symbol);
        symbolContainer.appendChild(symbol);
    }

    function restartTurn() {
        guiCurrentTurn.textContent = "Player 1 Turn";
        currentTurn = 1;
    }

    function getCurrentTurn() {
        let currentTurnCopy = currentTurn;
        return currentTurnCopy;
    };

    return {
        getSymbol: getSymbol,
        addSymbol: addSymbol,
        restartTurn: restartTurn,
        getCurrentTurn: getCurrentTurn
    };
})();

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
        if(gameboard[boxNum].symbol == boxNum) {
            createSymbol(boxNum);
        }
    })

    return {symbol, box};
}

function createSymbol(boxNum) {
    symbolModule.getSymbol(boxNum);
    symbolModule.addSymbol(boxNum);
    checkWinner();
}

function checkWinner() {
    if(gameboard[0].symbol == gameboard[1].symbol && gameboard[1].symbol == gameboard[2].symbol) {
        declareWinner(gameboard[0].symbol);
    }
    else if(gameboard[3].symbol == gameboard[4].symbol && gameboard[4].symbol == gameboard[5].symbol) {
        declareWinner(gameboard[3].symbol);
    }
    else if(gameboard[6].symbol == gameboard[7].symbol && gameboard[7].symbol == gameboard[8].symbol) {
        declareWinner(gameboard[6].symbol);
    }
    else if(gameboard[0].symbol == gameboard[3].symbol && gameboard[3].symbol == gameboard[6].symbol) {
        declareWinner(gameboard[0].symbol);
    }
    else if(gameboard[1].symbol == gameboard[4].symbol && gameboard[4].symbol == gameboard[7].symbol) {
        declareWinner(gameboard[1].symbol);
    }
    else if(gameboard[2].symbol == gameboard[5].symbol && gameboard[5].symbol == gameboard[8].symbol) {
        declareWinner(gameboard[2].symbol);
    }
    else if(gameboard[0].symbol == gameboard[4].symbol && gameboard[4].symbol == gameboard[8].symbol) {
        declareWinner(gameboard[0].symbol);
    }
    else if(gameboard[2].symbol == gameboard[4].symbol && gameboard[4].symbol == gameboard[6].symbol) {
        declareWinner(gameboard[2].symbol);
    }
    else if(symbolModule.getCurrentTurn() == 10) {
        alert("Draw!");
    }
}

function declareWinner(symbol) {
    if(symbol == player1.symbol) {
        alert("Player 1 Wins!");
    }
    else {
        alert("Player 2 Wins!");
    }

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

    const restartButton = document.querySelector("#restart-button");

    restartButton.addEventListener("click", () => {
        restartGame();
    })
}

function restartGame() {

    const boardtop = document.querySelector("#game-board-top");
    const boardmiddle = document.querySelector("#game-board-middle");
    const boardbottom = document.querySelector("#game-board-bottom");

    while (boardtop.hasChildNodes()) {
        boardtop.removeChild(boardtop.lastChild);
    }

    while (boardmiddle.hasChildNodes()) {
        boardmiddle.removeChild(boardmiddle.lastChild);
    }

    while (boardbottom.hasChildNodes()) {
        boardbottom.removeChild(boardbottom.lastChild);
    }

    symbolModule.restartTurn();
    gameboard = [];
    initialize();
}

function initialize() {
    createPlayers();
    createBoard();
}

let player1;
let player2;

initialize();

