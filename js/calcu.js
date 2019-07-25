console.log(eval(12+2-1));

let button = document.getElementsByClassName("button")
console.log(button);
button.onclick = console.log(button.value);
let input = "";

function showvalue(button){
    input = input + button.value;

    document.getElementById("output").innerHTML = input;
}

function domaths(){
    
}