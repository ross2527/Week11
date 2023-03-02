// console.log($("body"));

// let p = $("test");
// let div = $("Game");
// let ul = $("ul");

// console.log(p);
// console.log(div);
// console.log(ul);

// console.log(p.text());
// p.text("New Text")

// // $("input").val("New Value");

// $("input").attr("placeholder", "Placeholder Text");

let boardContainer=$("#Board");
let messageContainer=$("#Message");

let board=["","","","","","","","","",];

let message="Welcome to Tic Tac Toe";

let turn= 1;

let gameOver= false;

$(function() { 
    renderBoard()
    renderMessage()
  })


function renderBoard(){
    boardContainer.empty()
    for (let i = 0; i < board.length; i++) {
        const squareValue = board[i];
        renderSquare(i, squareValue);
    }

}


function renderSquare(index, value){
    const $newBox = $('<div/>')
    $newBox.addClass("Square")
    $newBox.text(value)
    if(gameOver===false && value==="") {
        $newBox.on('click', () => onSquareClick(index))
    } 
    boardContainer.append($newBox)


}
function renderMessage(){
    messageContainer.text(message)

}

function onSquareClick(index){
    if(turn===1) {
        board[index]= "X"
        turn=2
    } else {
        turn=1
        board[index]= "O"
    }
    // check if game is over --- render the board, game is over, we don't want the event listeners
    if (board[3]==="X"){
        gameOver=true
        message="Game is over"
    }

    renderBoard()
    renderMessage()

}

function onResetClick(){
    board=["","","","","","","","","",];

    message="Welcome to Tic Tac Toe";

    turn= 1;

    gameOver= false;

    renderMessage()
    renderBoard()

}