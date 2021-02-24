function hideCart()
{
document.getElementById("cartDiv").style.visibility = "hidden";
}

function openPreview()
{
document.getElementById("cartDiv").style.visibility="visible";
}
function reloadPage() {
document.getElementById("centerDiv").style.visibility = "visible";
document.getElementById("storeDiv").style.visibility = "hidden";
document.getElementById("elFot").style.visibility = "hidden";
document.getElementById("recipeDiv").style.visibility = "hidden";
document.getElementById("cartContents").style.visibility = "hidden";  
}
function shareLink() {
  var copyText = document.getElementById("pageLink");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Share this page: " + copyText.value);
}  

function recipes()
{
document.getElementById("centerDiv").style.visibility = "hidden";
document.getElementById("storeDiv").style.visibility = "hidden";
document.getElementById("elFot").style.visibility = "hidden";
document.getElementById("recipeDiv").style.visibility = "visible";
document.getElementById("cartContents").style.visibility = "hidden";
}
function store()
{
document.getElementById("centerDiv").style.visibility = "hidden";
document.getElementById("storeDiv").style.visibility = "visible";
document.getElementById("elFot").style.visibility = "hidden";
document.getElementById("recipeDiv").style.visibility = "hidden";
document.getElementById("cartContents").style.visibility = "hidden";
}
function more()
{
document.getElementById("centerDiv").style.visibility = "hidden";
document.getElementById("storeDiv").style.visibility = "hidden";
document.getElementById("elFot").style.visibility = "visible";
document.getElementById("recipeDiv").style.visibility = "hidden";
document.getElementById("cartContents").style.visibility = "hidden";
}
function addCart() {
var x = document.getElementById("rispeNumber").value;
document.getElementById("cartAmount").innerHTML = x;
}
function openCart()
{
document.getElementById("centerDiv").style.visibility = "hidden";
document.getElementById("storeDiv").style.visibility = "hidden";
document.getElementById("elFot").style.visibility = "hidden";
document.getElementById("recipeDiv").style.visibility = "hidden";
document.getElementById("cartContents").style.visibility = "visible";
}
