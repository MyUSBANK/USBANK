function validateform()
{
    var text = document.getElementById('text').value;
var password =document.getElementById('password').value;

if(text=="Anndownchurch11" && password=="Church$&12300"){
    alert('Welcome Back Alison Ann Church')

    window.location.href="home.html"
} else{
    alert("Incorrect username or password")
}
}

var btn=document.getElementById('sub');
btn.onclick= function(){
    alert('Welcome back Alison Ann Church')
}

