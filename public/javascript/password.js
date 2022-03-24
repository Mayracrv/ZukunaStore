console.log('vinculación externa de js'); 
const info = document.querySelector('.info');
const passfield = document.querySelector('#password');
let password= "";

function generatePassword() {
password = "";
let length = 14;
let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
let n = chars.length;
for (var i = 0; i < length; ++i) {
    password += chars.charAt(Math.floor(Math.random() * n)); 
}
passfield.value = password;
}
function copytext() {
navigator.clipboard.writeText(password);
info.style.opacity = "1";
setTimeout(function(){
info.style.opacity = "0"},1500);
}