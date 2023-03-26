//============problem statment 2======================//
const buttonA = document.getElementById("button-a");
const buttonB = document.getElementById("button-b");
const buttonC = document.getElementById("button-c");
const buttonD = document.getElementById("button-d");
const buttonHistory = document.getElementById("button-history");
const addMoreButton = document.getElementById("add-more");

let inputCount = 1;

buttonA.addEventListener("click", function() {
  addButtonHistory("Button A");
});

buttonB.addEventListener("click", function() {
  addButtonHistory("Button B");
});

buttonC.addEventListener("click", function() {
  addButtonHistory("Button C");
});

buttonD.addEventListener("click", function() {
  addButtonHistory("Button D");
});

function addButtonHistory(buttonName) {
  const currentDate = new Date()                  
  const newRow = buttonHistory.insertRow();
  const nameCell = newRow.insertCell(0);
  const timeCell = newRow.insertCell(1);
  nameCell.innerHTML = buttonName;
  timeCell.innerHTML = currentDate;
}


//=================problem statment 3========================//
addMoreButton.addEventListener("click", function() {
  const inputContainer = document.querySelector(".input-container");
  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.placeholder = "Input " + (inputCount + 1);
  inputContainer.appendChild(newInput);
  inputCount++;
});
