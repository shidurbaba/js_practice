// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

//1. EASY WAY
// let username;
// username = window.prompt("What's your username?");
// console.log(username);

//2. PROFESSIONAL WAY
let username;

document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Welcome to ${username}`
}