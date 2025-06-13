function printPattern1() {
  let finalString = "";
  let n = document.querySelector("#PInp1").value;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      finalString += i;
    }
    finalString += "<br>";
  }
  console.log(finalString);
  document.querySelector("#pr1").innerHTML = finalString;
}

function printPattern2() {
  let finalString = "";
  let n = document.querySelector("#PInp1").value;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      finalString += j;
    }
    finalString += "<br>";
  }
  console.log(finalString);

  document.querySelector("#pr2").innerHTML = finalString;
}

function printPattern3() {
  let finalString = "";
  let n = document.querySelector("#PInp1").value;
  let currentNumber = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      finalString += currentNumber + ", ";
      currentNumber++;
      if (currentNumber > n) break;
    }
    finalString += "<br>";
    console.log(finalString);
    if (currentNumber > n) break;
  }

  document.querySelector("#pr3").innerHTML = finalString;
}

function printPattern4() {
  debugger;
  let finalString = "";
  let n = document.querySelector("#PInp1").value;

  for (let i = 1; i <= n; i++) {
    for (let j = i; j >= 1; j--) {
      finalString += j;
    }
    finalString += "<br>";
  }
  console.log(finalString);

  document.querySelector("#pr4").innerHTML = finalString;
}

function printPattern5() {
  let finalString = "";
  let n = document.querySelector("#PInp1").value;

  for (let i = 1; i <= n; i++) {
    let sp = n;
    while (sp - i != 0) {
      finalString += "*";
      sp--;
    }
    for (let j = 1; j <= i; j++) {
      finalString += j;
    }
    finalString += "<br>";
  }
  console.log(finalString);
  sp = 5;
  document.querySelector("#pr5").innerHTML = finalString;
}

function printPattern6() {
  debugger;
  let finalString = "";
  let n = document.querySelector("#PInp1").value;

  for (let i = 0; i < n; i++) {
    for (let j = n - i; j > 0; j--) {
      finalString += j;
    }
    finalString += "<br>";
  }

  console.log(finalString);

  document.querySelector("#pr6").innerHTML = finalString;
}

function printPattern7() {
  debugger;
  let finalString = "";
  let n = document.querySelector("#PInp1").value;

  for (let i = 0; i < n; i++) {
    let sp = n;
    while (sp - i < n) {
      finalString += "*"; /* or  we also use this to add space -> &nbsp */
      sp++;
    }
    for (let j = 1; j <= n - i; j++) {
      finalString += j;
    }
    finalString += "<br>";
  }

  console.log(finalString);

  document.querySelector("#pr7").innerHTML = finalString;
}

function printPattern8() {
  let finalString = "";
  let n = parseFloat(document.querySelector("#PInp1").value);

  for (let i = 1; i <= n + (n - 1); i++) {
    if (i <= n) {
      //this is for adding space from front
      let sp = n;
      while (sp - i != 0) {
        finalString += "*";
        sp--;
      }
      for (let j = 1; j <= i; j++) {
        finalString += j;
      }
      for (let j = i - 1; j >= 1; j--) {
        finalString += j;
      }

      finalString += "<br>";
    } else {
      debugger;
      let sp = n;
      while (sp+n - i < n) {
        finalString += "*"; 
        sp++;
      }
      for (let k = 1; k <= (n*2) - i; k++) {
        finalString += k;
      }
      for(let l=((n*2)-1)-i;l>=1;l--){
        finalString+=l
      }

      finalString += "<br>";
    }
  }

  console.log(finalString);

  document.querySelector("#pr8").innerHTML = finalString;
}
