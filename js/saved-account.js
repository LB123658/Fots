function savedAccount() {
if (localStorage.getItem("fots_account").length > 1) {
  document.getElementById("signinDropdown").innerHTML = "Sign out";
  document.getElementById("signIn").innerHTML = localStorage.getItem("fots_account");
  document.getElementById("signinA").href = "#";
  document.getElementById("signindropdownA").href = "https://lb123658.github.io/Fots";
} 
}
