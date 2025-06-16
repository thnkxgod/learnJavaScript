let users = [];
let mobileNums = [];
function addUsers() {
  let FinalUsers = "";
  users.push(document.querySelector("#nameId").value);
  mobileNums.push(document.querySelector("#mobileId").value);

  console.log(users);
  console.log(mobileNums);

  for (let i = 0; i < users.length; i++) {
    FinalUsers +=
      i + 1 + "&nbsp" + users[i] + " &nbsp&nbsp&nbsp" + mobileNums[i] + "<Br>";
  }

  document.querySelector("#res").innerHTML = FinalUsers;
}
