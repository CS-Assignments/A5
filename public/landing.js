function loginCheck() {
  if((loginUsername.value == "") || (loginPassword.value == "")) {
    alert("Invalid Username or Password");
  } else {
    //console.log("username", loginUsername.value);
    //console.log("password", loginUse.value);
    for (i = 0; i < userAccounts.length; i++) {
      if(loginUsername.value.toString() == userAccounts[i][0] && loginPassword.value.toString() == userAccounts[i][1]) {
	location.pathname = "/mainShop/" + i;
        console.log("enter correct account");
      }
    }
    console.log("Error wrong username or password");
  }
}

function continueGuest() {
  console.log("current path:", location.pathname);
  location.pathname = "/mainShop.html"
}

let userAccounts = [
  ["Johnny", "appl3"],
  ["Jack", "121"],
  ["Hessey", "I<3CS"],
  ["Yay", "happy"]
];

var loginButton = document.getElementsByClassName("login-continue-button");
var guestButton = document.getElementsByClassName("login-guest-button");
var loginUsername = document.getElementById("login-username-input");
var loginPassword = document.getElementById("login-password-input");

loginButton[0].addEventListener("click", loginCheck);
guestButton[0].addEventListener("click", continueGuest);
