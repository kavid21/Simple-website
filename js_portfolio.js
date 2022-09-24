


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
document.getElementById("navbar").style.backgroundcolor = "white";
}
else{
document.getElementById("navbar").style.backgroundcolor = "transparent";
}
}


	
document.getElementById("sendMessage").addEventListener("click",sub);
function sub(){
var email = document.getElementById("email").value;
var fullName = document.getElementById("fullName").value;
var message = document.getElementById("message").value;
if(email == "" || fullName == "" || message == "" ){
alert(email)
}
else if(a1 != "" && a2 != "" && a3 != "" && a4 != ""){
alert(email)
}
}
  