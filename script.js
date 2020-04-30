function RegisterFunction() {
	earaseLogText();
	document.getElementById("Register").style = "display: inline-block;"
	document.getElementById("Settings").style = "display: none"

}

function LoginFunction() {
	earaseRegText();
	document.getElementById("Register").style = "display: none;"
	document.getElementById("Login").style = "display: inline-block;"
}

function WelcomeFunction() {
	//earaseRegText();
	//earaseLogText();

	//window.clearInterval(interval);
	document.getElementById("game").style = "display: none;"
	document.getElementById("Register").style = "display: none;"

	document.getElementById("Login").style = "display: none;"
	document.getElementById("Settings").style = "display: none;"
	document.getElementById("Welcome").style = "display: inline-block;"
	document.getElementById("menu").style = "display: inline-block;"
	document.getElementById("gameBackBtn").style = "display: none;"
}

function SettingsFunction() {

	document.getElementById("Register").style = "display: none;"
	document.getElementById("Login").style = "display: none;"
	document.getElementById("Welcome").style = "display: none;"
	document.getElementById("Settings").style = "display: inline-block;"
}

function AboutFunction() {
	document.getElementById("modal").style.display = "block"
}

function closeMyModal() { 
	document.getElementById("modal").style.display = "none"
}

window.onclick = function(e){
	if(e.target == modal){
		document.getElementById("modal").style.display = "none"
	}
}
window.onkeydown = function(e) {
        if (e.keyCode === 27) {
            document.getElementById("modal").style.display = "none"
        }
}

$(document).ready(function () {
	localStorage.setItem("p", "p");
})

function checkLogin() {
	let name = document.getElementById("logName").value;
	let pass = document.getElementById("logPswd").value;
	let x = localStorage.getItem(name);
	if (x == pass) {
		SettingsFunction();
	}
	else {
		alert('Incorrect username or password');
	}
}



function earaseRegText() {
	document.getElementById("regPswd").value = "";
	document.getElementById("email").value = "";

}
function earaseLogText() {
	document.getElementById("logPswd").value = "";
	document.getElementById("logName").value = "";
}
function randomFunc() {

	let balls = Math.floor(Math.random() * 41 ) + 50;
	let monsters = Math.floor(Math.random() * 4 ) + 1;
	let pTime = Math.floor(Math.random() * 61 ) + 60;

	document.getElementById("numOfBalls").value = balls;
	document.getElementById("monster").value = monsters;
	document.getElementById("timer").value = pTime;

	document.getElementById("up").value = "Up Arrow";
	document.getElementById("down").value = "Down Arrow";
	document.getElementById("left").value = "Left Arrow";
	document.getElementById("right").value = "Right Arrow";

	let color1 = Math.floor(Math.random() * 3);
	let color2 = Math.floor(Math.random() * 3);
	while (color1 === color2) {
		color2 = Math.floor(Math.random() * 3);
	}
	let color3 = Math.floor(Math.random() * 3);
	while (color3 === color1 || color3 == color2) {
		color3 = Math.floor(Math.random() * 3);
	}
	
	if (color1 === 0) {
		document.getElementById("5pointBalls").value = "#FF3A3A"; //red
		document.getElementById("15pointBalls").value = "#3AFF90"; //green
		document.getElementById("25pointBalls").value = "#2330df"; //blue
	}
	if (color1 === 1) {
		document.getElementById("5pointBalls").value = "#3AFF90"; //green
		document.getElementById("15pointBalls").value = "#2330df"; //blue
		document.getElementById("25pointBalls").value = "#FF3A3A"; //red
	}
	if (color1 === 2) {
		document.getElementById("5pointBalls").value = "#2330df"; //blue
		document.getElementById("15pointBalls").value = "#FF3A3A"; //red
		document.getElementById("25pointBalls").value = "#3AFF90"; //green
	}
	
}

function canvasFunction() {
	document.getElementById("Settings").style = "display: none;"


	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");
	ctx.fillStyle = "blue";
	ctx.fillRect(0, 0, canvas.width, canvas.height);



}



function getKey()
{
	let x = event.keyCode;
	let id = event.target.id;
	
	if (x == 38) {//up
		document.getElementById(id).value = "Up Arrow";
	}
	else if (x == 40) {//down
		document.getElementById(id).value = "Down Arrow";
	}
	else if (x == 37) {//left
		document.getElementById(id).value = "Left Arrow";
	}
	else if (x == 39) {//right
		document.getElementById(id).value = "Right Arrow";
	}
	else {
		let val = document.getElementById(id).value;
		if (val.length > 0) {
			document.getElementById(id).value = "";
		}
	}
}



