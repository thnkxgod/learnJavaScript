function showTeTo() {
  var d = "";
  for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
      var tmp = "<h4>" + "Even " + i + "</h4>";
      d += tmp;
    }
  }
  d = d + "------------------";
  for (let i = 0; i < 20; i++) {
    if (i % 2 == 1) {
      var tmp = "<h4>" + "Odd " + i + "</h4>";
      d += tmp;
    }
  }
  document.getElementById("teto").innerHTML = d;
}

function clRangeEO() {
    
  var a = document.getElementById("aa").value;
  var b = document.getElementById("bb").value;

  var d = "";
  for (let i = a; i < b; i++) {
    if (i % 2 == 0) {
      var tmp = "<h4>" + "Even " + i + "</h4>";
      d += tmp;
    }
  }
  d = d + "------------------";
  var v = document.getElementById("rngres")
  v.innerHTML = d;
  v.style.color = "red"

  var tl = "";
  for (let i = a; i < b; i++) {
    if (i % 2 == 1) {
      var tmp = "<h4>" + "Odd " + i + "</h4>";
      tl += tmp;
    }
  }
  var u = document.getElementById("rngres2")
  u.innerHTML =tl
  u.style.color = "green"
}

function calculatePrime() {
  var pr = "";
  var nm = "even";
  var n = document.getElementById("pr").value;
  for (let i = 2; i <= n; i++) {
    if (checkPrime(i)) {
      var fnl = "<p>" + i + "</p>";
      pr += fnl;
    }
  }
  document.getElementById("rs").innerHTML = pr;
}

function checkPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function firstTenN() {
  var sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum = sum + i;
  }
  document.getElementById("res").innerText = sum;
}

function evenOdd() {
  debugger;
  var f1 = document.getElementById("f1").value;
  var f2 = document.getElementById("f2").value;

  if (checkEO(f1)) {
    document.getElementById("eo1").innerText = "Even";
  } else {
    document.getElementById("eo1").innerText = "Odd";
  }

  if (checkEO(f2)) {
    document.getElementById("eo2").innerText = "Even";
  } else {
    document.getElementById("eo2").innerText = "Odd";
  }
}

function checkEO(n) {
  if (n % 2 == 0) return true;
  else return false;
}

function showContent(){
  var j = document.querySelectorAll('.a2 h1')
  console.log(j[1]);
}
