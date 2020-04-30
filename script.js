var context;
var ctx;
var shape = new Object();
var bounus_shape = new Object();
var monster_shape = new Object();

var board;
var score;
var pac_color;
var start_time;
let time_elapsed;
var interval;
var food;
var sixty;
var thirty;
var ten;
let pac_face1;
let pac_face2;
let pac_eye1;
let pac_eye2;
let eye_bool;
var blockerSound;
var startSound;
var victorySound;
var points50;
var hurt;
var missionFailed;
var savedFruit;
var savedFruit2;
var erase;
var monsterErase;
var enterLoop;
var enterLoop2;
var loopCount;
var loopCoun2;
var lives;
let quit;
let done;
let total_pause;
var eatenPink;






function settingToStart() {
	document.getElementById("gameBackBtn").style = "display: 'block;"
	document.getElementById("Settings").style = "display: none;"
	document.getElementById("menu").style = "display: none;"
	document.getElementById("game").style = "display: 'block;"
	document.getElementById("settingsShown").style = "display: 'block;"
	context = canvas.getContext("2d");
	ctx = canvas.getContext("2d");
	lblUp.value = document.getElementById("up").value;
	lblDown.value = document.getElementById("down").value;
	lblLeft.value = document.getElementById("left").value;
	lblRight.value = document.getElementById("right").value;
	lblNumOfBalls.value = document.getElementById("numOfBalls").value;
	lblNumOfBallsLeft.value = document.getElementById("numOfBalls").value;
	lblMonster.value = document.getElementById("monster").value;
	lblTtime.value = document.getElementById("timer").value;
	lives = 5;
	lblLives.value = 5;

	points50 = document.getElementById("point50");
	hurt = document.getElementById("hurt")
	missionFailed = document.getElementById("missionFailed")
	victorySound = document.getElementById("victorySound");
	startSound = document.getElementById("startSound");
	startSound.volume = 0;
	startSound.play();
	startSound.onended = function () {
		blockerSound = document.getElementById("blockerSound");
		blockerSound.volume = 0;
		blockerSound.play();
	
	}


	pac_face1 = 0.15 * Math.PI;
	pac_face2 = 1.85 * Math.PI;
	savedFruit = 3;
	savedFruit2 = 5;
	eye_bool = true;
	erase = true;
	monsterErase = true;
	enterLoop = true;
	enterLoop2 = true;

	eatenPink = false;
	loopCount = 0;
	loopCount2 = 0;
	quit = false;
	done = false;
	total_pause = 0;
	Start();
}






function Start() {

	board = new Array();
	score = 0;

	pac_color = "yellow";
	var cnt = 115;
	var food_remain = document.getElementById("numOfBalls").value;
	food = document.getElementById("numOfBalls").value;

	sixty = food_remain * 0.6;

	thirty = food_remain * 0.3;
	ten = food_remain * 0.1;





	var pacman_remain = 1;

	start_time = new Date();
	for (var i = 0; i < 15; i++) {
		board[i] = new Array();
		//put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
		for (var j = 0; j < 10; j++) {
			if (

				(i == 3 && j == 3) ||
				(i == 3 && j == 4) ||
				(i == 3 && j == 5) ||
				(i == 6 && j == 1) ||
				(i == 6 && j == 2) ||
				(i == 6 && j == 7) ||
				(i == 7 && j == 7) ||
				(i == 8 && j == 7) ||
				(i == 9 && j == 7) ||
				(i == 5 && j == 4) ||
				(i == 6 && j == 4) ||
				(i == 7 && j == 4) ||
				(i == 12 && j == 3) ||
				(i == 12 && j == 4) ||
				(i == 12 && j == 5) ||
				(i == 10 && j == 0) ||
				(i == 10 && j == 1) ||
				(i == 12 && j == 1) ||
				(i == 12 && j == 2) ||
				(i == 1 && j == 8) ||
				(i == 1 && j == 9) ||
				(i == 1 && j == 2) ||
				(i == 1 && j == 5) ||
				(i == 1 && j == 6) ||
				(i == 4 && j == 8) ||
				(i == 7 && j == 9) ||
				(i == 13 && j == 8) ||
				(i == 13 && j == 9) ||
				(i == 9 && j == 6) ||
				(i == 13 && j == 5) ||
				(i == 5 && j == 5) ||
				(i == 3 && j == 0) ||
				(i == 10 && j == 3) ||
				(i == 11 && j == 8)



			) {
				board[i][j] = 4;



				//put circle points
			} else {

				var randomNum = Math.random();

				if (i == 0 && j == 0) {

					board[0][0] = 3;
					bounus_shape.i = 0;
					bounus_shape.j = 0;

				}
				else if (i == 14 && j == 9) {
					board[14][9] = 5;
					monster_shape.i = 14;
					monster_shape.j = 9;


				}

				else if (randomNum <= (1.5 * food_remain) / cnt) {


					while (true && food_remain > 0) {
						let ans = Math.floor(Math.random() * 10);

						if (ans == 0) {
							if (sixty > 0) {

								board[i][j] = 10;
								sixty--;
								break;
							}
						}
						if (ans == 1) {
							if (sixty > 0) {

								board[i][j] = 10;
								sixty--;
								break;
							}
						}
						if (ans == 2) {
							if (sixty > 0) {

								board[i][j] = 10;
								sixty--;
								break;
							}
						}
						if (ans == 3) {
							if (sixty > 0) {

								board[i][j] = 10;
								sixty--;
								break;
							}
						}
						if (ans == 4) {
							if (sixty > 0) {

								board[i][j] = 10;
								sixty--;
								break;
							}
						}
						else if (ans == 5) {
							if (sixty > 0) {
								board[i][j] = 10;
								sixty--;
								break;
							}
						}
						else if (ans == 6) {
							if (thirty > 0) {
								board[i][j] = 11;
								thirty--;
								break;
							}
						}
						if (ans == 7) {
							if (thirty > 0) {

								board[i][j] = 11;
								thirty--;
								break;
							}
						}
						if (ans == 8) {
							if (thirty > 0) {

								board[i][j] = 11;
								thirty--;
								break;
							}
						}
						if (ans == 9) {
							if (ten > 0) {

								board[i][j] = 12;
								ten--;
								break;
							}
						}
					}
					food_remain--;
				} else if (randomNum <= (pacman_remain + 1.5 * food_remain) / cnt) {
					shape.i = i;
					shape.j = j;
					pacman_remain--;
					board[i][j] = 2;



				} else {
					board[i][j] = 0;
				}

				cnt--;

			}
		}
	}

	while (food_remain > 0) {
		food_remain--;
		var emptyCell = findRandomEmptyCell(board);

		while (true) {
			let ans = Math.floor(Math.random() * 10);

			if (ans == 0) {
				if (sixty > 0) {

					board[emptyCell[0]][emptyCell[1]] = 10;
					sixty--;
					break;
				}
			}
			if (ans == 1) {
				if (sixty > 0) {

					board[emptyCell[0]][emptyCell[1]] = 10;
					sixty--;
					break;
				}
			}
			if (ans == 2) {
				if (sixty > 0) {

					board[emptyCell[0]][emptyCell[1]] = 10;
					sixty--;
					break;
				}
			}
			if (ans == 3) {
				if (sixty > 0) {

					board[emptyCell[0]][emptyCell[1]] = 10;
					sixty--;
					break;
				}
			}
			if (ans == 4) {
				if (sixty > 0) {
					board[emptyCell[0]][emptyCell[1]] = 10;
					sixty--;
					break;
				}
			}
			else if (ans == 5) {
				if (sixty > 0) {
					board[emptyCell[0]][emptyCell[1]] = 10;
					sixty--;
					break;
				}
			}
			else if (ans == 6) {
				if (thirty > 0) {
					board[emptyCell[0]][emptyCell[1]] = 11;
					thirty--;
					break;
				}
			}
			if (ans == 7) {
				if (thirty > 0) {

					board[emptyCell[0]][emptyCell[1]] = 11;
					thirty--;
					break;
				}
			}
			if (ans == 8) {
				if (thirty > 0) {

					board[emptyCell[0]][emptyCell[1]] = 11;
					thirty--;
					break;
				}
			}
			if (ans == 9) {
				if (ten > 0) {

					board[emptyCell[0]][emptyCell[1]] = 12;
					ten--;
					break;
				}
			}
		}

	}

	keysDown = {};
	addEventListener(
		"keydown",
		function (e) {
			keysDown[e.keyCode] = true;
		},
		false
	);
	addEventListener(
		"keyup",
		function (e) {
			keysDown[e.keyCode] = false;
		},
		false
	);

	
		interval = setInterval(UpdatePosition, 200);

	
	
}

function findRandomEmptyCell(board) {
	var i = Math.floor(Math.random() * 14 + 0);
	var j = Math.floor(Math.random() * 9 + 0);
	while (board[i][j] != 0) {
		i = Math.floor(Math.random() * 14 + 0);
		j = Math.floor(Math.random() * 9 + 0);
	}
	return [i, j];
}

function GetKeyPressed() {
	let val = document.getElementById("up").value;
	if (val.length == 1) {
		if (keysDown[document.getElementById("up").value.toUpperCase().charCodeAt(0)]) {//up
			return 1;
		}
	}
	else {
		if (keysDown[38]) {//up
		return 1;
		}
	}
	val = document.getElementById("down").value;
	if (val.length == 1) {
		if (keysDown[document.getElementById("down").value.toUpperCase().charCodeAt(0)]) {//down
			return 2;
		}
	}
	else {
		if (keysDown[40]) {//down
			return 2;
		}
	}
	val = document.getElementById("left").value;
	if (val.length == 1) {
		if (keysDown[document.getElementById("left").value.toUpperCase().charCodeAt(0)]) {//left
			return 3;
		}
	}
	else {
		if (keysDown[37]) {//left
			return 3;
		}
	}
	val = document.getElementById("right").value;
	if (val.length == 1) {
		if (keysDown[document.getElementById("right").value.toUpperCase().charCodeAt(0)]) {//right
			return 4;
		}
	}
	else {
		if (keysDown[39]) {//right
			return 4;
		}
	}
}

function Draw() {


	lblUserName.value = document.getElementById("logName").value;
	canvas.width = canvas.width; //clean board
	lblScore.value = score;
	lblTime.value = time_elapsed;
	lblLives.value = lives;




	for (var i = 0; i < 15; i++) {
		for (var j = 0; j < 10; j++) {
			var center = new Object();

			center.x = i * 60 + 30;
			center.y = j * 60 + 30;

			if (eye_bool) {

				pac_eye1 = center.x + 5;
				pac_eye2 = center.y - 15;

			}

			if (board[i][j] == 2) {
				// half circle

				var x = GetKeyPressed();
				if (x == 1) {//up
					pac_face1 = -1.1;
					pac_face2 = 1.32 * Math.PI;
					pac_eye1 = center.x + 15;
					pac_eye2 = center.y + 1;

					eye_bool = false;
				}
				if (x == 2) {//down
					pac_face1 = 0.59 * Math.PI;
					pac_face2 = 1.1;

					pac_eye1 = center.x + 15;
					pac_eye2 = center.y + 5;
					eye_bool = false;
				}
				if (x == 3) {//left 

					pac_face1 = 1.15 * Math.PI;
					pac_face2 = 3;

					pac_eye1 = center.x + 5;
					pac_eye2 = center.y - 15;
					eye_bool = false;


				}
				if (x == 4) {//right

					pac_face1 = 0.15 * Math.PI;
					pac_face2 = 1.85 * Math.PI;

					pac_eye1 = center.x + 5;
					pac_eye2 = center.y - 15;
					eye_bool = false;

				}
				context.beginPath();
				context.arc(center.x, center.y, 23, pac_face1, pac_face2); //
				context.lineTo(center.x, center.y);
				context.fillStyle = pac_color; //color
				context.fill();
				context.beginPath();
				context.arc(pac_eye1, pac_eye2, 4.5, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();


			}
			else if (board[i][j] == 3) {
				context.beginPath();
				context.arc(center.x, center.y, 16, Math.PI, 0); //
				context.lineTo(center.x, center.y);
				context.fillStyle = "deeppink"; //color
				context.fill();

				context.beginPath();
				context.arc(center.x - 7, center.y - 7, 3.5, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();
				context.beginPath();
				context.arc(center.x + 7, center.y - 7, 3.5, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();
				context.beginPath();
				context.arc(center.x, center.y + 2, 16, 0, Math.PI); // circle
				context.fillStyle = "deeppink"; //color
				context.fill();

			} else if (board[i][j] == 5) {

				context.beginPath();
				context.arc(center.x, center.y - 3, 26, Math.PI, 0); //
				context.lineTo(center.x, center.y);
				context.fillStyle = "black"; //color
				context.fill();
				context.beginPath();
				context.arc(center.x, center.y, 26, 0, Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();
				context.beginPath();
				context.arc(center.x - 10, center.y - 12, 3.5, 0, 2 * Math.PI); // circle
				context.fillStyle = "white"; //color
				context.fill();
				context.arc(center.x + 10, center.y - 12, 3.5, 0, 2 * Math.PI); // circle
				context.fillStyle = "white"; //color
				context.fill();


			} else if (board[i][j] == 10) {
				context.beginPath();
				context.arc(center.x, center.y, 12, 0, 2 * Math.PI); // circle
				context.fillStyle = document.getElementById("5pointBalls").value;
				context.fill();

			} else if (board[i][j] == 11) {

				context.beginPath();
				context.arc(center.x, center.y, 12, 0, 2 * Math.PI); // circle
				context.fillStyle = document.getElementById("15pointBalls").value;
				context.fill();
			} else if (board[i][j] == 12) {

				context.beginPath();
				context.arc(center.x, center.y, 12, 0, 2 * Math.PI); // circle
				context.fillStyle = document.getElementById("25pointBalls").value;
				context.fill();



			} else if (board[i][j] == 4) {
				context.beginPath();
				context.rect(center.x - 30, center.y - 30, 60, 60);
				context.fillStyle = "grey"; //color
				context.fill();
			}
		}
	}


}

function UpdatePosition() {
	

	if (food == 0) {
		blockerSound.volume = 0.18;
		victorySound.play();
		window.clearInterval(interval);

		let ans = window.confirm("game finished! your score is: " + score + " points! play again?");
		if (ans) {
			settingToStart();
		}
		else {
			blockerSound.pause();
			blockerSound.currentTime = 0;
			WelcomeFunction();
		}
	}


	if (lives <= 0) {
		blockerSound.volume = 0.18;
		missionFailed.play();
		window.clearInterval(interval);
		let Lans = window.confirm("Loser!..........play again?");

		if (Lans) {
			settingToStart();
		}
		else {
			blockerSound.pause();
			blockerSound.currentTime = 0;
			WelcomeFunction();
		}
	}
	board[shape.i][shape.j] = 0;

	// move pacman
	var x = GetKeyPressed();
	if (x == 1) {
		if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
			shape.j--;
		}
	}
	else if (x == 2) {
		if (shape.j < 9 && board[shape.i][shape.j + 1] != 4) {
			shape.j++;
		}
	}
	else if (x == 3) {

		if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {

			shape.i--;
		}
	}
	else if (x == 4) {
		if (shape.i < 14 && board[shape.i + 1][shape.j] != 4) {
			shape.i++;
		}
	}








	//movement of bonus shape
	var tempi = bounus_shape.i;
	var tempj = bounus_shape.j;

	//loopCount is the speed of the shape 0 = fastest
	if (enterLoop && loopCount == 1) {

		board[bounus_shape.i][bounus_shape.j] = savedFruit;

		while (true) {
			let randomWalk = Math.floor(Math.random() * 4);

			if (randomWalk == 0) {
				if (bounus_shape.j > 0 && board[bounus_shape.i][bounus_shape.j - 1] != 4) {
					savedFruit = board[bounus_shape.i][bounus_shape.j - 1];
					bounus_shape.j--;
					break;
				}
			}
			if (randomWalk == 1) {
				if (bounus_shape.j < 9 && board[bounus_shape.i][bounus_shape.j + 1] != 4) {
					savedFruit = board[bounus_shape.i][bounus_shape.j + 1];
					bounus_shape.j++;
					break;
				}
			}
			if (randomWalk == 2) {
				if (bounus_shape.i > 0 && board[bounus_shape.i - 1][bounus_shape.j] != 4) {
					savedFruit = board[bounus_shape.i - 1][bounus_shape.j];
					bounus_shape.i--;
					break;
				}
			}
			if (randomWalk == 3) {
				if (bounus_shape.i < 14 && board[bounus_shape.i + 1][bounus_shape.j] != 4) {
					savedFruit = board[bounus_shape.i + 1][bounus_shape.j];
					bounus_shape.i++;
					break;
				}
			}
		}
		board[bounus_shape.i][bounus_shape.j] = 3;
		if (erase) {
			board[tempi][tempj] = 0;
			erase = false;
		}
		loopCount = 0;
	} else {
		loopCount++;
	}



	//movement of the monster

	var Mtempi = monster_shape.i;
	var Mtempj = monster_shape.j;


	if (loopCount2 == 2) {
		let randy = true;

		board[monster_shape.i][monster_shape.j] = savedFruit2;

		// walk towards pacman
		if (shape.j < monster_shape.j) {//up
			if (monster_shape.j > 0 && board[monster_shape.i][monster_shape.j - 1] != 4) {
				savedFruit2 = board[monster_shape.i][monster_shape.j - 1];
				monster_shape.j--;
				randy = false;

			}
		}
		if (shape.j > monster_shape.j) {//down

			if (monster_shape.j < 9 && board[monster_shape.i][monster_shape.j + 1] != 4) {
				savedFruit2 = board[monster_shape.i][monster_shape.j + 1];
				monster_shape.j++;
				randy = false;
			}
		}
		if (shape.i < monster_shape.i) {//left

			if (monster_shape.i > 0 && board[monster_shape.i - 1][monster_shape.j] != 4) {
				savedFruit2 = board[monster_shape.i - 1][monster_shape.j];
				monster_shape.i--;
				randy = false;
			}
		}
		if (shape.i > monster_shape.i) {//right

			if (monster_shape.i < 14 && board[monster_shape.i + 1][monster_shape.j] != 4) {
				savedFruit2 = board[monster_shape.i + 1][monster_shape.j];
				monster_shape.i++;
				randy = false;
			}
		}

		// if the monster is stuck go random
		while (randy) {
			let randomMonsterWalk = Math.floor(Math.random() * 4);

			if (randomMonsterWalk == 0) {
				if (monster_shape.j > 0 && board[monster_shape.i][monster_shape.j - 1] != 4) {
					savedFruit2 = board[monster_shape.i][monster_shape.j - 1];
					monster_shape.j--;
					break;
				}
			}
			if (randomMonsterWalk == 1) {
				if (monster_shape.j < 9 && board[monster_shape.i][monster_shape.j + 1] != 4) {
					savedFruit2 = board[monster_shape.i][monster_shape.j + 1];
					monster_shape.j++;
					break;
				}
			}
			if (randomMonsterWalk == 2) {
				if (monster_shape.i > 0 && board[monster_shape.i - 1][monster_shape.j] != 4) {
					savedFruit2 = board[monster_shape.i - 1][monster_shape.j];
					monster_shape.i--;
					break;
				}
			}
			if (randomMonsterWalk == 3) {
				if (monster_shape.i < 14 && board[monster_shape.i + 1][monster_shape.j] != 4) {
					savedFruit2 = board[monster_shape.i + 1][monster_shape.j];
					monster_shape.i++;
					break;
				}
			}
		}
		board[monster_shape.i][monster_shape.j] = 5;
		if (monsterErase) {
			board[Mtempi][Mtempj] = 0;
			if (savedFruit2 == 5) {
				savedFruit2 = 0;
			}
			monsterErase = false;
		}
		loopCount2 = 0;
	} else {
		loopCount2++;
	}



	//if a monster got pacman
	if (monster_shape.i == shape.i && monster_shape.j == shape.j) {
		hurt.play();
		lives--;
		if (savedFruit2 == 10) {
			score = score + 5;
			food--;
			lblNumOfBallsLeft.value--;
		}
		if (savedFruit2 == 11) {
			score = score + 15;
			food--;
			lblNumOfBallsLeft.value--;
		}
		if (savedFruit2 == 12) {
			score = score + 25;
			food--;
			lblNumOfBallsLeft.value--;
		}
		savedFruit2 = 0;


	}
	// if paceman found food
	if (board[shape.i][shape.j] == 10) {
		score = score + 5;
		food--;
		lblNumOfBallsLeft.value--;
	}
	else if (board[shape.i][shape.j] == 11) {
		score = score + 15;
		food--;
		lblNumOfBallsLeft.value--;

	} else if (board[shape.i][shape.j] == 12) {
		score = score + 25;
		food--;
		lblNumOfBallsLeft.value--;
	}


	//if pcaman caught the bonus shape
	if (bounus_shape.i == shape.i && bounus_shape.j == shape.j && enterLoop) {
		score = score + 50;
		points50.play();
		enterLoop = false;
		if (savedFruit == 10) {
			score = score + 5;
			food--;
			lblNumOfBallsLeft.value--;
		}
		if (savedFruit == 11) {
			score = score + 15;
			food--;
			lblNumOfBallsLeft.value--;
		}
		if (savedFruit == 12) {
			score = score + 25;
			food--;
			lblNumOfBallsLeft.value--;
		}
	}

	board[shape.i][shape.j] = 2;
	let timer = lblTtime.value;
	if (quit) {
		quit = false;
	} 
	else {
		var currentTime = new Date();
		time_elapsed = Math.floor((currentTime - start_time - total_pause) / 1000);
	}

	
	if (time_elapsed >= timer) {
		done = true;
		window.clearInterval(interval);
		window.alert("Time's up!");

	} else {
		Draw();
	}
}


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
	earaseRegText();
	earaseLogText();
	
	window.clearInterval(interval);
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

	document.getElementById("up").value = "up Arrow";
	document.getElementById("down").value = "Down Arrow";
	document.getElementById("left").value = "Left Arrow";
	document.getElementById("right").value = "Right Arrow";


}

function canvasFunction() {
	document.getElementById("Settings").style = "display: none;"


	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");
	ctx.fillStyle = "blue";
	ctx.fillRect(0, 0, canvas.width, canvas.height);



}
function QuitToMainFunc() {
	
	let start_time = new Date();
	quit = true;
	blockerSound.volume = 0.18;
	let ans = confirm("Are you sure you want to quit to the main menu?");
	
	if (ans) {
		earaseRegText();
		earaseLogText();
		blockerSound.volume = 1;
		blockerSound.pause();
		blockerSound.currentTime = 0;

		window.clearInterval(interval);
		document.getElementById("game").style = "display: none;"
		document.getElementById("Register").style = "display: none;"
		document.getElementById("Login").style = "display: none;"
		document.getElementById("Settings").style = "display: none;"
		document.getElementById("Welcome").style = "display: inline-block;"
		document.getElementById("menu").style = "display: inline-block;"
		document.getElementById("gameBackBtn").style = "display: none;"
	}
	else{
		let end_time = new Date();
		let pause = end_time - start_time;
		total_pause += pause;
		time_elapsed = Math.floor(document.getElementById("lblTime").value);
		blockerSound.volume = 1;
		blockerSound.play();
	}
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

