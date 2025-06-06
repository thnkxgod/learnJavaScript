function printName(op) {
  let res = "";
  var a = parseFloat(document.getElementById("a1").value);
  var b = parseFloat(document.getElementById("a2").value);
  if (op === "+") {
    res=a+b;

    
  } else if (op === "-") {
    res=a-b;

  } else if (op === "*") {
    res=a*b;

  }else if (op === "/") {
    res=a/b;

  } 
  document.getElementById('s1').innerText= res;
}
