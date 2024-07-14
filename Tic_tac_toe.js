let boxes = document.querySelectorAll(".box");
let resetButtn = document.querySelector("#reset");
let newGame = document.querySelector("#new-game");
let postWin = document.querySelector("#msgContainer");
let msg = document.querySelector("#winMsg");

let turnO = true;

let winning = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach( (box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O"
            turnO = false;
        }
        else{
            box.innerText = "X"
            turnO = true;
        }

        box.disabled = true;
        checkWinner();

    });
});

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    postWin.classList.add("hide");
};

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    turnO = false;
};

const showWinner = (winner) => {
    msg.innerText = `Yay!! ${winner} is the Winner!`;
    postWin.classList.remove("hide");
    
    disableBoxes();

};

const checkWinner = () =>{
    for(let pattern of winning){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!= "" && pos2!= "" && pos3!= ""){
            if(pos1===pos2 && pos3===pos1){
                console.log(`winner is ${pos1}`);
                showWinner(pos1);
            }
        }
    }

};

newGame.addEventListener("click", resetGame);
resetButtn.addEventListener("click", resetGame);
