let inp = "";
let operator = null;
let a = "";
let b = "";
let res = "";
function valueadd(cinput) {
  inp = inp + cinput;
  document.getElementById("r1").innerText = inp;
}

function operation(op) {
  a = parseFloat(inp);

  inp = "";
  operator = op;
  document.getElementById("r1").innerText = op;
}

function calculateResult(op) {
  b = parseFloat(inp);

  if (operator === "+") {
    res = a + b;
  } else if (operator === "-") {
    res = a - b;
  } else if (operator === "*") {
    res = a * b;
  } else if (operator === "/") {
    res = a / b;
  } else {
  }
  console.log(res);
  document.getElementById("r1").innerText = res;
}

function clearall() {
  inp = "";
  operator = null;
  let a = "";
  let b = "";
  let res = "";
  document.getElementById("r1").innerText = "Results";
}
