document.getElementById("openLoginForm").onclick = function(event) {
    event.preventDefault(); // предотвращаем переход по ссылке
    document.getElementById("registrationForm").classList.add("hidden"); // скрываем форму регистрации
    document.getElementById("close").classList.add("hidden");
    document.getElementById("stop").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden"); // показываем форму входа
}

document.getElementById("openForgotPasswordForm").onclick = function(event) {
    event.preventDefault();
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("forgotPasswordForm").classList.remove("hidden");
}

document.getElementById("backToLoginForm").onclick = function(event) {
    event.preventDefault();
    document.getElementById("forgotPasswordForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
}

function handleLogin(event) {
    event.preventDefault(); 
    window.location.href = 'file:///C:/Users/admin/Desktop/VSC/Website/index.html';
}

function register(event){
    event.preventDefault();
    window.location.href = 'file:///C:/Users/admin/Desktop/VSC/Website/index.html';
}
