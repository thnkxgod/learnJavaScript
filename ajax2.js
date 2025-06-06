let inp = "";
let operator = "";
let a = "";
let res = "";
let b = "";
let oldShow = "";

function valueAdd(cinput) {
  inp = inp + cinput;
  document.getElementById("r1").innerText = oldShow + operator + inp;
}

function setOperation(op) {
  operator = op;
  a = parseFloat(inp);
  document.getElementById("r1").innerText = inp + op;
  oldShow = inp;
  inp = "";
  console.log(a);
}

function calculateResult() {
  b = parseFloat(inp);
  inp = "";
  document.getElementById("r1").innerText = inp;
  console.log(b);

  switch (operator) {
    case "+":
      res = a + b;
      break;
    case "-":
      res = a - b;
      break;
    case "*":
      res = a * b;
      break;
    case "/":
      res = a / b;
      break;
    default:
      console.log("invalid");
  }

  document.getElementById("r1").innerText = res;
}

function clearAll() {
  inp = "";
  operator = "";
  a = "";
  b = "";
  res = "";
  oldShow = "";

  document.getElementById("r1").innerText = res;
}

document.onkeydown = function (event) {
  const key = event.key;

  if (!isNaN(key)) valueAdd(key);
  else if (key == "+" || key == "-" || key == "*" || key == "/")
    setOperation(key);
  else if (key === "Enter") calculateResult();
  else if (key === "Backspace") clearAll();
};
