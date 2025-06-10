var numbers = [];
let finalString = "";

let arr1 = [1,5,6,8,11,28 ]
let arr2 = [2,7,12,13,18,30 ]



document.querySelector("#inp3").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addNum()
  }
});


function EOrangeColor() {
  var s = document.querySelector("#firstInp").value;
  var e = document.querySelector("#SecondInp").value;

  var FinalString = "";

  for (let i = s; i < e; i++) {
    if (i % 2 == 0) {
      FinalString += "<p style='color:red;'> even : " + i + "</p>";
    } else {
      FinalString += "<p style='color:green;'> Odd :" + i + "</p>";
    }
    document.querySelector("#res").innerHTML = FinalString;
  }
}

function printReverse() {
  debugger;
  var s = document.querySelector("#t1").value;
  var e = document.querySelector("#t2").value;

  let FinalString = "";
  let i = e;
  for (i = e; i >= s; i--) {
    FinalString += "<p>" + i + "</p>";
  }

  document.querySelector("#res2").innerHTML = FinalString;
}

function addNum() {
  let input3 = parseInt(document.querySelector("#inp3").value) 
  numbers.push(input3);
  document.querySelector("#inp3").value = "";
  console.log(numbers);
  finalString += input3 + ", ";
  document.querySelector("#dis").innerHTML = finalString;
}


function calculateSecondLarge() {
  debugger
  var max = numbers[0];
  var max2 = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max2 = max;
      max = numbers[i];
    } else {
      if (numbers[i] > max2 && numbers[i]!=max) {
        max2 = numbers[i];
      }
    }
  }

  document.querySelector("#res3").innerHTML =
    "maximum value is - " + max + " and  second max is - " + max2;

  console.log(max2);
  console.log(max);
}




