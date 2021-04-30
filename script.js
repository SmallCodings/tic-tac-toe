let gameboard = [];

const symbolModule = (() => {
    let currentTurn = 1;

    function getSymbol(boxNum) {
        if(currentTurn % 2 == 1) {
            gameboard[boxNum].symbol = player1.symbol;
            gameboard[boxNum].symbol = player1.symbol;
        }
        else {
            gameboard[boxNum].symbol = player2.symbol;
            gameboard[boxNum].symbol = player2.symbol;
        }
        currentTurn += 1;
    }

    function addSymbol(boxNum) {
        const symbolContainer = document.createElement("div");
        symbolContainer.classList.add("symbol");
        symbolContainer.classList.add("symbol" + gameboard[boxNum].symbol);
        gameboard[boxNum].box.appendChild(symbolContainer);
        const symbol = document.createTextNode(gameboard[boxNum].symbol);
        symbolContainer.appendChild(symbol);
    }

    return {
        getSymbol: getSymbol,
        addSymbol: addSymbol
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

initialize();

