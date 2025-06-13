var a = "";
var b = "";
var f = 0;
var oparator=null;
var result=''

function valueAdd(inp) {
  if (f > 0) {
    b += inp;
    console.log(b);
  } else {
    a += inp;
    console.log(a);
  }
}

function setOperation(op) {
  oparator = op;
  f++;
}

function calculateResult(){
  debugger
  switch(oparator){
    case '+':
      result= parseInt(a)+parseInt(b)
      break
    case '-':
      result= a-b
      break
    case '*':
      result= a*b
      break
    case '/':
      result= a/b
      break
    default:
      console.log('invalid');
      
  }

  console.log(result);
  $('#r1').text(result)
  
}

function clearAll() {
  a = "";
  b = "";
  f = 0;
  oparator = null;
  result = "";
  $('#r1').text("Result:");
}


