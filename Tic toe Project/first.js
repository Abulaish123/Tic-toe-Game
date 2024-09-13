let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#Reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
let count = 0;

const winPattern = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
  
];

const resetGame = () => {
  turn0 = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");

};

boxes.forEach((box) => 
{
  box.addEventListener("click",() => {
    console.log("box was clicked");
    if (turn0){
      box.innerText = "0";
      turn0 =false;

    }
    else {
      box.innerText = "x";
      turn0 = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();
    if (count === 9 && isWinner){
      gameDraw();
    }
  });
});
const gameDraw = () => {
  msg.innerText = `game was a drawn`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;

  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";

  }
};

 const showwinner = (winner) => {
  msg.innerText = `congratulations, winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();

 }
 const checkWinner = () => {
  for (pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val!="" && pos2Val != "" && pos3Val != "") {
       if (pos1Val === pos2Val && pos2Val === pos3Val){
        console.log ("winner",pos1Val);
        showwinner(pos1Val);
       }
    }
  }
};
newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click" , resetGame);