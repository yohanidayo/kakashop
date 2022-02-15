var LoginForm = document.getElementById("loginForm");
var signForm = document.getElementById("signForm");
var line = document.getElementById("line");

function register() {
    signForm.style.transform = "translateX(0px)";
    loginForm.style.transform = "translateX(0px)";
    line.style.transform = "translateX(170px)";
}

function login() {
    signForm.style.transform = "translateX(500px)";
    loginForm.style.transform = "translateX(500px)";
    line.style.transform = "translateX(0px)";
}