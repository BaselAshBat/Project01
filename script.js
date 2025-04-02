let userName
let password
let nickName

const moves = ["Rock", "Paper", "Scissors"]
let comChoice;

let score = 0
let rounds = 0

document.getElementById("userName").addEventListener("input", checkInputs);
document.getElementById("password").addEventListener("input", checkInputs);
document.getElementById("nickName").addEventListener("input", checkInputs);

const submitUserData = document.getElementById('submitUserData')

function checkUserData() {
    userName = document.getElementById("userName").value.trim();
    password = document.getElementById("password").value.trim();
    nickName = document.getElementById("nickName").value.trim();
    submitUserData.disabled = !(userName && password && nickName);
}

function getUserInfo(){
    alert("User data saved! (not really)")
}

function rps(pMove){
    rounds += 1
    comChoice = moves[Math.floor(Math.random() * moves.length)]
    document.getElementById("comChoice").innerText = comChoice;

    if (comChoice === "Rock" && pMove === "Paper") {
        score += 1
    } else if (comChoice === "Paper" && pMove === "Scissors") {
        score += 1
    } else if (comChoice === "Scissors" && pMove === "Rock") {
        score += 1
    }

    if (comChoice === pMove) {
        score += 0.5
    }
    document.getElementById("points").innerText = score;
    document.getElementById("rounds").innerText = rounds;
    document.getElementById("winrate").innerText = score/rounds;
}

