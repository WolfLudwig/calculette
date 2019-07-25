// console.log(eval(12+2-1));
let input ="";

let buttons = document.getElementsByClassName("button");
// console.log(buttons[5].value);

for (let i = 0; i < buttons.length; i++){
    // console.log(buttons[i].value);
    buttons[i].addEventListener("click", showvalue);
}

let rset = document.getElementById("reset");
rset.addEventListener("click", reset);

let rmove = document.getElementById("remove");
rmove.addEventListener("click", remove);

let equal = document.getElementById("result")
equal.addEventListener("click", domaths)

function showvalue(){
    input = input + this.value;

    document.getElementById("output").innerHTML = input;
}

function domaths(){
    document.getElementById("output").innerHTML = eval(input);
    input = ""
}

function reset(){
    document.getElementById("output").innerHTML = "Un autre calcul?"
    input = ""
}

function remove(){
    input = input.replace(input.slice(-1), "")
    document.getElementById("output").innerHTML = input;
}