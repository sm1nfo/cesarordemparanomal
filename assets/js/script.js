const loginSubmit = document.getElementById("loginSubmit");
const cadastroSubmit = document.getElementById("cadastroSubmit");
var loginImg = document.getElementById("loginImg");
var allLoginImg = document.getElementsByClassName("loginImg");

loginSubmit.addEventListener("click", function loginOn() {
    for (var i = 0; i < allLoginImg.length; i++) {
        loginImg[i].src = "login (logado).png";
     }
});

loginSubmit.addEventListener("click", function(){
    loginImg.src = "./assets/img/login (logado).png";
    alert("Bem vindo Agente!");
});

cadastroSubmit.addEventListener("click", function(){
    loginImg.src = "./assets/img/login (logado).png";
    alert("Bem vindo Agente!");
});