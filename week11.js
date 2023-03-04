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

let message="Lets Play";

let turn= 1;

let gameOver= false;

$(function() { 
    renderBoard()
    renderMessage()
  })


function renderBoard(){
    boardContainer.empty()
    for (let i = 0; i < board.length; i++) {
        console.log("index:", i, board)
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

// figuring out who is winning-what combinations
//checking for turn what does that even mean
//checking the information in each cell 
function checkWinner() {
    console.log("Checking for winner...")
    let winningCombo = [[1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7]];
    for (let index = 0; index < winningCombo.length; index++) {
        console.log(index, "winning combo 1st loop", winningCombo[index]);
        // second loop - Begin
        for (let index2 = 0; index2 < winningCombo[index].length;index2++) {
            console.log("winning combo 2nd loop", winningCombo[index][index2]);
            // comparison of combinations to squares that have been played
        }
        
        // second loop - End
        
    }
}

function onSquareClick(index){
    console.log("index:", typeof index, index);
    if(turn===1) {
        board[index]= "X"
        console.log(board[index]);
        turn=2
    } else {
        turn=1
        board[index]= "O"
        console.log(board[index]);
    }
    // check if game is over --- render the board, game is over, we don't want the event listeners
    // if (board[1]==="X"){
    //     gameOver=true
    //     message="Game is over"
    // } 
    

    renderBoard()
    renderMessage()

    checkWinner()

}

function onResetClick(){
    board=["","","","","","","","","",];

    message="Welcome to Tic Tac Toe";

    turn= 1;

    gameOver= false;

    renderMessage()
    renderBoard()

}

