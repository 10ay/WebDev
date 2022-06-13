let total = 0;
let strbuffer = "0";
let operator;

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    mathsSymbol(value);
  } else {
    mathsNumber(value);
  }
  document.querySelector(".screen").innerText = strbuffer;

}

function mathsNumber(value) {
  if (strbuffer === "0") {
    strbuffer = value;
  } else {
    strbuffer += value;
  }
}

function handleOperations(value) {
  if (strbuffer === "0") {
    // do nothing
    return;
  }

  const intstrbuffer = parseInt(strbuffer);
  if (total === 0) {
    total = intstrbuffer;
  } else {
    operatoroperations(intstrbuffer);
  }

  operator = value;

  strbuffer = "0";
}

function operatoroperations(intstrbuffer) {
  if (operator === "+") {
    total += intstrbuffer;
  } else if (operator === "-") {
    total -= intstrbuffer;
  } else if (operator === "x") {
    total *= intstrbuffer;
  } else {
    total /= intstrbuffer;
  }
}

function mathsSymbol(value) {
  switch (value) {
    case "C":
      strbuffer = "0";
      total = 0;
      break;
    case "=":
      if (operator === null) {
        // need two numbers to do math
        return;
      }
      operatoroperations(parseInt(strbuffer));
      operator = null;
      strbuffer = +total;
      total = 0;
      break;
    case "←":
      if (strbuffer.length === 1) {
        strbuffer = "0";
      } else {
        strbuffer = strbuffer.substring(0, strbuffer.length - 1);
      }
      break;
    case "+":
    case "-":
    case "x":
    case "÷":
      handleOperations(value);
      break;
  }
}
function main() {
  document.querySelector(".calc-buttons").addEventListener("click", function(event) {
    buttonClick(event.target.innerText);
  });
}

main();
