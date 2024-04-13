var navBar = document.getElementById("navBar");
var menuBar = document.getElementById("menuBar");

navBar.style.right ="-220rem";
menuBar.onclick = function(){
  if(navBar.style.right =="-220rem"){
    navBar.style.right ="-20rem";
  }
  else{
    navBar.style.right ="-220rem";
  }
}