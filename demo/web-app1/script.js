function dispMessage(){
   // alert("Hello")
   //alert(document.getElementById("txtEmail").value)
   //lblMessage.innerHTML = document.getElementById("txtEmail").value
   //lbMessage.innerHTML = document.getElementById("txtpass").value
let email=document.getElementById("txtEmail").value;
let pass=document.getElementById("txtpass").value;
if(email==="b23it011@kitsw.ac.in" && pass==="1234"){
   lblMessage.innerHTML="Welcome";
}else{
   lblMessage.innerHTML="Access Denied";
}
}