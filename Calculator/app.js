let btn = document.querySelectorAll(".printable");
let operation = document.querySelector(".operation");
let answer = document.querySelector(".answer");
for (let i of btn){
    i.addEventListener("click", function(){
        operation.innerText += i.innerText;
    });
}

let DELbtn = document.querySelector(".DEL");
DELbtn.addEventListener("click", function(){
    operation.innerText = operation.innerText.slice(0, -1);
});

let ACbtn = document.querySelector(".AC");
ACbtn.addEventListener("click", function(){
    operation.innerText = "";
    answer.innerText = "";
});

function evaluateExpression(expr) {
    try {
        return eval(expr);
    } catch (error) {
        return "Syntax Error";
    }
    
}



let equalTo = document.querySelector(".equalTo");
equalTo.addEventListener("click", function(){
    let expression = operation.innerText;
    let result = evaluateExpression(expression);
    answer.innerText = result;
});

let ANSbtn = document.querySelector(".ANS");
ANSbtn.addEventListener("click", function(){
    let result =evaluateExpression(operation.innerText);
    if (result === "Syntax Error") {
        answer.innerText = result;
        return;
    }
    operation.innerText = result;
    answer.innerText = "";
});