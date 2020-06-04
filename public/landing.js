function loginCheck() {
  if((loginUsername.value == "") || (loginPassword.value == "")) {
    alert("Invalid Username or Password");
  } else {
    location.pathname = "/checking/" + loginUsername.value + "_" + loginPassword.value;
  }
}

function continueGuest() {
  console.log("current path:", location.pathname);
  location.pathname = "/mainShop.html"
}

var loginButton = document.getElementsByClassName("login-continue-button");
var guestButton = document.getElementsByClassName("login-guest-button");
var loginUsername = document.getElementById("login-username-input");
var loginPassword = document.getElementById("login-password-input");

loginButton[0].addEventListener("click", loginCheck);
guestButton[0].addEventListener("click", continueGuest);
