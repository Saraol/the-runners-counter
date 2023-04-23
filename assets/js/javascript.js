let container = document.getElementById("container");    
    

// Plus Button
let plusButton = document.createElement("button");
plusButton.textContent ="+";
container.appendChild(plusButton);
plusButton.setAttribute("id","plus");

// Minus Button
let minusButton = document.createElement("button");
minusButton.textContent = "-";
container.appendChild(minusButton);
minusButton.setAttribute("id", "minus");

// Reset Button
let resetButton = document.createElement("button");
resetButton.textContent = "R";
container.appendChild(resetButton);
resetButton.setAttribute("id", "reset");

// Number/Value Container 
let numberContainer = document.createElement("div"); 
container.appendChild(numberContainer);
numberContainer.setAttribute("class", "numbCont");

// Number/Value 
let number = document.createElement("p");
number.textContent = "0";
numberContainer.appendChild(number);   
number.setAttribute("id", "number");

//add | substract | reset
plusButton.addEventListener("click", add);
minusButton.addEventListener("click", subtract);
resetButton.addEventListener("click", reset); 

let value = 0; 

function add() {
  value++;
  number.innerHTML = value;
}
    
function subtract() {
  value--;
  number.innerHTML = value;
}

function reset () {
  value = (value - value);
  number.innerHTML = value;
}


  