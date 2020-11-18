function Do(){
var name=document.getElementById("name");
var dob=document.getElementById("dob");
var email=document.getElementById("email");
var date=document.getElementById("wor");
var time=document.getElementById("time");
var num=document.getElementById("ph");
if(name.value=="" || email.value=="" || num.value.length!= 10){
alert("The form has been filled incorrectly,please fill again correctly");
return false;
};
}
