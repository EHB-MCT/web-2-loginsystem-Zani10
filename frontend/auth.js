// Check the sessionStorage
let user = JSON.parse(sessionStorage.getItem('user'));

if (user) {
    document.getElementById('welcomemessage').innerText = `Welcome ${user.username}`
} else {
    window.location.href = "/frontend/login.html";
}