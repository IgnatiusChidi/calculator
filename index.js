var userInput = document.getElementById("userInput");
var numberButtons = document.getElementsByClassName("numberButton");
var functionButtons = document.getElementsByClassName("functionButton");
var darkModeButton = document.getElementById("darkButton");
var equalToButton = document.getElementById("equalButton");
var result = document.getElementById("result");
var clearButton = document.getElementById("clearText");
var removeText = document.getElementById("removeText");

for(let i = 0; i< numberButtons.length; i++){
    numberButtons[i].addEventListener('click', () =>{
        userInput.value = userInput.value + "" + numberButtons[i].textContent;
    })
};

for(let i = 0; i < functionButtons.length; i++){
    functionButtons[i].addEventListener('click', () =>{
        userInput.value = userInput.value + "" + functionButtons[i].textContent;
    })
};

equalToButton.addEventListener('click', () => {
    let preResult = eval(userInput.value);
    result.textContent ="= " + preResult;
    userInput.value = "";
});

clearButton.addEventListener('click', () =>{
    userInput.value = "";
    result.textContent = 0;
});

removeText.addEventListener('click', () => {
    const input = userInput;
    const selectionStart = input.selectionStart;

    if (selectionStart > 0) {
        const currentInputValue = input.value;
        const newInputValue = currentInputValue.slice(0, selectionStart - 1) + currentInputValue.slice(selectionStart);
        input.value = newInputValue;
        input.setSelectionRange(selectionStart - 1, selectionStart - 1);
    }
});

darkModeButton.addEventListener('click', () =>{
    //var logo = document.getElementById("logo");
    //logo.src = "calcula or2.png";
    var body = document.querySelector(body);
    body.classList.toggle("darkBody")
})