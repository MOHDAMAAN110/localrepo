let boxes = document.querySelectorAll(".box");
let rsb = document.querySelector("#rsb");
let newgame = document.querySelector("#ngm");
let msgcont = document.querySelector(".msgcont");
let msg = document.querySelector("#msg");
let turn = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 6],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resgame=()=>{
    turn=true;
  enableBoxes();  
  msgcont.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if (turn) {
            box.innerText = "O";
            turn = false;
        }
        else {
            box.innerText = "X";
            turn = true;
        }
        box.disabled = true;
        checkwinner();
    });

});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText=`Congrats,Winner is ${winner}`;
    msgcont.classList.remove("hide");
    disableBoxes();
}
const checkwinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1==pos2&&pos2==pos3){
                console.log("winner", pos1);
            showWinner(pos1);
            }
        }
    }
}
newgame.addEventListener("click",resgame);
rsb.addEventListener("click",resgame);