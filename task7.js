var numbers = [];
let finalString = "";
let finalString1 = "";
let finalString2 = "";

/* let arr1 = [1, 2, 5, 6, 8, 11, 28];
let arr2 = [2, 7, 12, 13, 32, 35]; */

let arr1 = [];
let arr2 = [];

document.querySelector("#inp3").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addNum();
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
  let input3 = parseInt(document.querySelector("#inp3").value);
  numbers.push(input3);
  document.querySelector("#inp3").value = "";
  console.log(numbers);
  finalString += input3 + ", ";
  document.querySelector("#dis").innerHTML = finalString;
}

function calculateSecondLarge() {
  debugger;
  var max = numbers[0];
  var max2 = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max2 = max;
      max = numbers[i];
    } else {
      if (numbers[i] > max2 && numbers[i] != max) {
        max2 = numbers[i];
      }
    }
  }

  document.querySelector("#res3").innerHTML =
    "maximum value is - " + max + " and  second max is - " + max2;

  console.log(max2);
  console.log(max);
}

function addNum2(choice) {
  if (choice == arr1) {
    let input3 = parseInt(document.querySelector("#arr1").value);
    choice.push(input3);
    document.querySelector("#arr1").value = "";
    console.log(arr1);
    finalString1 += input3 + ", ";
    document.querySelector("#arr1dis").innerHTML = finalString1;
  } else {
    let input3 = parseInt(document.querySelector("#arr2").value);
    choice.push(input3);
    document.querySelector("#arr2").value = "";
    console.log(arr2);
    finalString2 += input3 + ", ";
    document.querySelector("#arr2dis").innerHTML = finalString2;
  }
}

function mergeArray() {
  let fnl = "";
  arr2.forEach((e) => {
    arr1.push(e);
  });
  console.log(arr1);

  let len = arr1.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr1[j] > arr1[j + 1]) {
        var tmp = arr1[j];
        arr1[j] = arr1[j + 1];
        arr1[j + 1] = tmp;
      }
    }
  }
  arr1.forEach((e) => {
    fnl += e + ",";
  });
  document.querySelector("#res4").innerHTML = fnl;
  console.log(arr1);
}

/*   debugger
  for (let i = 0; i < arr2.length; i++) {
    for (let j = i; j < arr1.length; j++) {
      if(arr2[i]<arr1[j]){
        arr1.splice(j,0,arr2[i])
        break
      }
    }
  }
  console.log(arr1); */

var arrT5 = [1, 2, 2, 1, 5, 2, 6, 12, 13, 7, 5, 18];

function removeDuplicate() {
  const mySet = new Set();
  arrT5.forEach((e) => {
    mySet.add(e);
  });

  console.log(mySet);
  let textt = "";

  for (const x of mySet) {
    textt += x + "<br>";
  }

  document.querySelector("#res5").innerHTML = textt;
}

const listA = new Set(["Alice", "Bob", "Charlie", "David", "Eve"]);
const listB = new Set(["Eve", "Frank", "Alice", "Grace", "Henry"]);

function FindCommonElement() {
  var fnl = "";
  for (const i of listB) {
    if (listA.has(i)) {
      fnl += "<p>" + i + "</p>";
    }
  }
  console.log(fnl);

  document.querySelector("#resT6").innerHTML = fnl;
}

var user = new Set();
function addNames() {
  let name = document.querySelector("#nameInp").value;
  user.add(name);
  console.log(user);
}

function FindLongestString() {
  var longestString = "";
  for (const nm of user) {
    if (longestString.length < nm.length) {
      longestString = nm;
    }
  }
  console.log(longestString);
  document.querySelector("#disT7").innerHTML = longestString;
}

const arrT8 = [];
function addNumT8() {
  let val = parseFloat(document.querySelector("#inpT8").value);
  arrT8.push(val);
  finalString += val + ", ";
  document.querySelector("#numsDisT8").innerHTML = finalString;
  console.log(arrT8);
}

function sumOfAllNum() {
  let ans = 0;
  arrT8.forEach((e) => {
    ans += e;
  });
  console.log(ans);
  document.querySelector("#resT8").innerHTML = ans;
}

function FindSmallLarge() {
  let max = 0;
  let min = Infinity;
  arrT8.forEach((e) => {
    if (max < e) max = e;
    if (min > e) min = e;
  });
  console.log(max);
  console.log(min);
  document.querySelector("#resT8").innerHTML =
    "Maximum Value is : " + max + " and Minimum value is : " + min;
}

function countEvenOdd() {
  let evenCount = 0;
  let oddCount = 0;
  arrT8.forEach((e) => {
    if (e % 2 == 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  });
  console.log(evenCount);
  console.log(oddCount);
  document.querySelector("#resT8").innerHTML =
    "there are  : " + evenCount + " even and  " + oddCount + " Odd Numbers ";
}

function reverseArray() {
  debugger
  let tmp = 0;
  let len = arrT8.length;
  for (let i = 0; i < len / 2; i++) {
    if (i != len - (i+1)) {
      tmp = arrT8[i];
      arrT8[i] = arrT8[len - (i + 1)];
      arrT8[len - (i+1)] = tmp;
    }
  }
  arrT8.forEach(e => {
    finalString1+=e+ ', '
  });
    document.querySelector("#numsDisT8").innerHTML = finalString1;
  console.log(arrT8);
}
