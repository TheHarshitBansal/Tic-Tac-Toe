const patterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let turnO = true; //Turn of player O
let reset_btn = document.querySelector(".reset");
let btn = document.querySelectorAll(".game");

btn.forEach(btn => {
    btn.addEventListener("click", ()=>{
        if(turnO){
            btn.innerText="O";
            turnO = false;
            document.querySelector(".turn").innerHTML = "Player 2 turn"
        }
        else{
            btn.innerText="X";
            turnO = true;
            document.querySelector(".turn").innerHTML = "Player 1 turn"
        }
        btn.disabled = true;
        checkWinner();
    })
});

function checkWinner() {
    for (const pattern of patterns) {
        let first = btn[pattern[0]].innerText;
        let second = btn[pattern[1]].innerText;
        let third = btn[pattern[2]].innerText;

        if(first != "" && second != "" && third != ""){
            if(first == second && first == third){
                if(first == "O"){
                    alert("Winner is Player 1 (O)");
                    reset();
                }
                else{
                    alert("Winner is Player 2 (X)");
                    reset();
                }
            }
        }
    }
}


//Resetting the Game
const reset = () => {
    btn.forEach(element => {
        element.innerText = "";
        element.disabled = false;
        turnO = true;
    });
}
reset_btn.addEventListener("click", ()=>{
    reset();
})