var context;
var ctx;
var shape = new Object();
var bounus_shape = new Object();
var monster_shape = new Object();
var monster_shape2 = new Object();
var monster_shape3 = new Object();
var monster_shape4 = new Object();
var Time_once;
var Time_once_life;
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;
var food;
var sixty;
var thirty;
var ten;
let pac_face1;
let pac_face2;
let pac_face1_life;
let pac_face2_life;
let pac_eye1;
let pac_eye2;
let eye_bool;
var blockerSound;
var startSound;
var bounus_life;
var victorySound;
var points50;
var hurt;
var missionFailed;
var savedFruit;
var savedFruit1;
var savedFruit2;
var savedFruit3;
var savedFruit4;
var erase;
var monsterErase;
var monsterErase2;
var monsterErase3;
var monsterErase4;
var enterLoop;
var enterLoop2;
var loopCount;
var loopCount1;
var loopCount2;
var loopCount3;
var loopCount4;
var time_color;
var Time_cycle;
var Time_cycle_life;
var lives;
var display;
var numOfMonsters;
var quit;
var eatenPink;
let done;
let total_pause;
var bounus_time;








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
	
	pointColor5.style.color = document.getElementById("5pointBalls").value;
	pointColor15.style.color = document.getElementById("15pointBalls").value;
	pointColor25.style.color = document.getElementById("25pointBalls").value;
	pointColor5.style.background = document.getElementById("5pointBalls").value;
	pointColor15.style.backgroundColor = document.getElementById("15pointBalls").value;
	pointColor25.style.backgroundColor = document.getElementById("25pointBalls").value;

	numOfMonsters = lblMonster.value;
	lives = 5;
	lblLives.value = 5;

	points50 = document.getElementById("point50");
	hurt = document.getElementById("hurt")
	missionFailed = document.getElementById("missionFailed")
	victorySound = document.getElementById("victorySound");
	startSound = document.getElementById("startSound");
	bounus_life = document.getElementById("bounus_life");
	startSound.volume = 1;
	startSound.play();
	startSound.onended = function () {
		blockerSound = document.getElementById("blockerSound");
		blockerSound.volume = 1;
		blockerSound.play();

	}

	quit = false;
	total_pause = 0;
	done = false;
	pac_face1 = 0.15 * Math.PI;
	pac_face2 = 1.85 * Math.PI;
	pac_face1_life = 0.15 * Math.PI;
	pac_face2_life = 1.85 * Math.PI;
	savedFruit = 3;
	savedFruit1 = 5;
	savedFruit2 = 6;
	savedFruit3 = 7;
	savedFruit3 = 8;
	eye_bool = true;
	erase = true;
	Time_once = true;
	Time_once_life = true;
	monsterErase = true;
	monsterErase2 = true;
	monsterErase3 = true;
	monsterErase4 = true;
	enterLoop = true;
	enterLoop2 = true;
	display = false;
	eatenPink = false;
	time_elapsed = 0;
	bounus_time = 0;
	loopCount = 0;
	loopCount1 = 0;
	loopCount2 = 0;
	loopCount3 = 0;
	loopCount4 = 0;
	Time_cycle = true;
	Time_cycle_life = true;
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

					board[0][0] = 3;//bounus monster
					bounus_shape.i = 0;
					bounus_shape.j = 0;

				}
				else if (i == 14 && j == 9) {
					board[14][9] = 5;//monster
					monster_shape.i = 14;
					monster_shape.j = 9;


				} else if (i == 0 && j == 9 && numOfMonsters > 1) {
					board[0][9] = 6;//2 monsters
					monster_shape2.i = 0;
					monster_shape2.j = 9;


				}
				else if (i == 14 && j == 0 && numOfMonsters > 2) {

					board[14][0] = 7;// 3 monsters
					monster_shape3.i = 14;
					monster_shape3.j = 0;
				}
				else if (i == 1 && j == 0 && numOfMonsters > 3) {
					board[1][0] = 8;// 4 monsters
					monster_shape4.i = 1;
					monster_shape4.j = 0;

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

	interval = setInterval(UpdatePosition, 230);
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
				if (pac_face1 == -1.1) {
					pac_eye1 = center.x + 15;
					pac_eye2 = center.y + 1;
				}
				else if (pac_face2 == 1.1) {
					pac_eye1 = center.x + 15;
					pac_eye2 = center.y + 5;
				}
				else if (pac_eye2 == 3) {
					pac_eye1 = center.x + 5;
					pac_eye2 = center.y - 15;
				}
				else {
					pac_eye1 = center.x + 5;
					pac_eye2 = center.y - 15;
				}

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

			} else if (board[i][j] == 6) {

				context.beginPath();
				context.arc(center.x, center.y - 3, 26, Math.PI, 0); //
				context.lineTo(center.x, center.y);
				context.fillStyle = "darkred"; //color
				context.fill();
				context.beginPath();
				context.arc(center.x, center.y, 26, 0, Math.PI); // circle
				context.fillStyle = "darkred"; //color
				context.fill();
				context.beginPath();
				context.arc(center.x - 10, center.y - 12, 3.5, 0, 2 * Math.PI); // circle
				context.fillStyle = "white"; //color
				context.fill();
				context.arc(center.x + 10, center.y - 12, 3.5, 0, 2 * Math.PI); // circle
				context.fillStyle = "white"; //color
				context.fill();
			} else if (board[i][j] == 7) {

				context.beginPath();
				context.arc(center.x, center.y - 3, 26, Math.PI, 0); //
				context.lineTo(center.x, center.y);
				context.fillStyle = "darkcyan"; //color
				context.fill();
				context.beginPath();
				context.arc(center.x, center.y, 26, 0, Math.PI); // circle
				context.fillStyle = "darkcyan"; //color
				context.fill();
				context.beginPath();
				context.arc(center.x - 10, center.y - 12, 3.5, 0, 2 * Math.PI); // circle
				context.fillStyle = "white"; //color
				context.fill();
				context.arc(center.x + 10, center.y - 12, 3.5, 0, 2 * Math.PI); // circle
				context.fillStyle = "white"; //color
				context.fill();

			} else if (board[i][j] == 8) {

				context.beginPath();
				context.arc(center.x, center.y - 3, 26, Math.PI, 0); //
				context.lineTo(center.x, center.y);
				context.fillStyle = "slategray"; //color
				context.fill();
				context.beginPath();
				context.arc(center.x, center.y, 26, 0, Math.PI); // circle
				context.fillStyle = "slategray"; //color
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

			} else if (board[i][j] == 15) {
				if (Time_cycle) {
					time_color = "black";
					Time_cycle = false;
				} else {
					time_color = "white";
					Time_cycle = true;
				}
				context.beginPath();
				context.rect(center.x, center.y - 25, 10, 40); // circle
				context.fillStyle = time_color;
				context.fill();
				context.beginPath();
				context.rect(center.x - 15, center.y - 25, 40, 10); // circle
				context.fillStyle = time_color;
				context.fill();

			} else if (board[i][j] == 16) {
				if (Time_cycle_life) {
					time_color = "cyan";
					pac_face1_life = 1.15 * Math.PI;
					pac_face2_life = 3;

					Time_cycle_life = false;
				} else {
					time_color = "seagreen";
					Time_cycle_life = true;
					pac_face1_life = 0.15 * Math.PI;
					pac_face2_life = 1.85 * Math.PI;
				}
				context.beginPath();
				context.arc(center.x, center.y, 19, pac_face1_life, pac_face2_life); //
				context.lineTo(center.x, center.y);
				context.fillStyle = time_color; //color
				context.fill();
				context.beginPath();
				context.arc(center.x + 5, center.y - 15, 4, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
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
		display = true;
		board[shape.i][shape.j] = 0;
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



	//if pcaman caught the bonus shape
	bounus_shapeCaughtFunc();

	//if a monster got pacman
	monsterCaughtPacman();
	if (numOfMonsters > 1) {
		monsterCaughtPacman2();
	}
	if (numOfMonsters > 2) {
		monsterCaughtPacman3();
	}
	if (numOfMonsters > 3) {
		monsterCaughtPacman4();
	}





	//movement of bonus shape  board[i][j] = 3;
	var tempi = bounus_shape.i;
	var tempj = bounus_shape.j;

	//loopCount is the speed of the shape 0 = fastest
	if (enterLoop && loopCount == 1) {

		board[bounus_shape.i][bounus_shape.j] = savedFruit;

		while (true) {
			let randomWalk = Math.floor(Math.random() * 4);

			if (randomWalk == 0) {
				if (bounus_shape.j > 0 && board[bounus_shape.i][bounus_shape.j - 1] != 4
					&& board[bounus_shape.i][bounus_shape.j - 1] != 5
					&& board[bounus_shape.i][bounus_shape.j - 1] != 6
					&& board[bounus_shape.i][bounus_shape.j - 1] != 7
					&& board[bounus_shape.i][bounus_shape.j - 1] != 8) {
					savedFruit = board[bounus_shape.i][bounus_shape.j - 1];
					bounus_shape.j--;
					break;
				}
			}
			if (randomWalk == 1) {
				if (bounus_shape.j < 9 && board[bounus_shape.i][bounus_shape.j + 1] != 4
					&& board[bounus_shape.i][bounus_shape.j + 1] != 5
					&& board[bounus_shape.i][bounus_shape.j + 1] != 6
					&& board[bounus_shape.i][bounus_shape.j + 1] != 7
					&& board[bounus_shape.i][bounus_shape.j + 1] != 8) {
					savedFruit = board[bounus_shape.i][bounus_shape.j + 1];
					bounus_shape.j++;
					break;
				}
			}
			if (randomWalk == 2) {
				if (bounus_shape.i > 0 && board[bounus_shape.i - 1][bounus_shape.j] != 4
					&& board[bounus_shape.i - 1][bounus_shape.j] != 5
					&& board[bounus_shape.i - 1][bounus_shape.j] != 6
					&& board[bounus_shape.i - 1][bounus_shape.j] != 7
					&& board[bounus_shape.i - 1][bounus_shape.j] != 8) {
					savedFruit = board[bounus_shape.i - 1][bounus_shape.j];
					bounus_shape.i--;
					break;
				}
			}
			if (randomWalk == 3) {
				if (bounus_shape.i < 14 && board[bounus_shape.i + 1][bounus_shape.j] != 4
					&& board[bounus_shape.i + 1][bounus_shape.j] != 5
					&& board[bounus_shape.i + 1][bounus_shape.j] != 6
					&& board[bounus_shape.i + 1][bounus_shape.j] != 7
					&& board[bounus_shape.i + 1][bounus_shape.j] != 8) {
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



	//movement of the monster board[i][j] = 5

	var Mtempi = monster_shape.i;
	var Mtempj = monster_shape.j;


	if (loopCount1 == 2) {
		let randy = true;

		board[monster_shape.i][monster_shape.j] = savedFruit1;

		// walk towards pacman
		if (shape.j < monster_shape.j) {//up
			if (monster_shape.j > 0 && board[monster_shape.i][monster_shape.j - 1] != 4
				&& board[monster_shape.i][monster_shape.j - 1] != 3
				&& board[monster_shape.i][monster_shape.j - 1] != 6
				&& board[monster_shape.i][monster_shape.j - 1] != 7
				&& board[monster_shape.i][monster_shape.j - 1] != 8) {
				savedFruit1 = board[monster_shape.i][monster_shape.j - 1];
				monster_shape.j--;
				randy = false;

			}
		}
		if (shape.j > monster_shape.j) {//down

			if (monster_shape.j < 9 && board[monster_shape.i][monster_shape.j + 1] != 4
				&& board[monster_shape.i][monster_shape.j + 1] != 3
				&& board[monster_shape.i][monster_shape.j + 1] != 6
				&& board[monster_shape.i][monster_shape.j + 1] != 7
				&& board[monster_shape.i][monster_shape.j + 1] != 8) {
				savedFruit1 = board[monster_shape.i][monster_shape.j + 1];
				monster_shape.j++;
				randy = false;
			}
		}
		if (shape.i < monster_shape.i) {//left

			if (monster_shape.i > 0 && board[monster_shape.i - 1][monster_shape.j] != 4
				&& board[monster_shape.i - 1][monster_shape.j] != 3
				&& board[monster_shape.i - 1][monster_shape.j] != 6
				&& board[monster_shape.i - 1][monster_shape.j] != 7
				&& board[monster_shape.i - 1][monster_shape.j] != 8) {
				savedFruit1 = board[monster_shape.i - 1][monster_shape.j];
				monster_shape.i--;
				randy = false;
			}
		}
		if (shape.i > monster_shape.i) {//right

			if (monster_shape.i < 14 && board[monster_shape.i + 1][monster_shape.j] != 4
				&& board[monster_shape.i + 1][monster_shape.j] != 3
				&& board[monster_shape.i + 1][monster_shape.j] != 6
				&& board[monster_shape.i + 1][monster_shape.j] != 7
				&& board[monster_shape.i + 1][monster_shape.j] != 8) {
				savedFruit1 = board[monster_shape.i + 1][monster_shape.j];
				monster_shape.i++;
				randy = false;
			}
		}

		// if the monster is stuck go random
		if (randy) {
			let randomMonsterWalk = Math.floor(Math.random() * 4);

			if (randomMonsterWalk == 0) {
				if (monster_shape.j > 0 && board[monster_shape.i][monster_shape.j - 1] != 4
					&& board[monster_shape.i][monster_shape.j - 1] != 3
					&& board[monster_shape.i][monster_shape.j - 1] != 6
					&& board[monster_shape.i][monster_shape.j - 1] != 7
					&& board[monster_shape.i][monster_shape.j - 1] != 8) {
					savedFruit1 = board[monster_shape.i][monster_shape.j - 1];
					monster_shape.j--;

				}
			}
			if (randomMonsterWalk == 1) {
				if (monster_shape.j < 9 && board[monster_shape.i][monster_shape.j + 1] != 4
					&& board[monster_shape.i][monster_shape.j + 1] != 3
					&& board[monster_shape.i][monster_shape.j + 1] != 6
					&& board[monster_shape.i][monster_shape.j + 1] != 7
					&& board[monster_shape.i][monster_shape.j + 1] != 8) {
					savedFruit1 = board[monster_shape.i][monster_shape.j + 1];
					monster_shape.j++;

				}
			}
			if (randomMonsterWalk == 2) {
				if (monster_shape.i > 0 && board[monster_shape.i - 1][monster_shape.j] != 4
					&& board[monster_shape.i - 1][monster_shape.j] != 3
					&& board[monster_shape.i - 1][monster_shape.j] != 6
					&& board[monster_shape.i - 1][monster_shape.j] != 7
					&& board[monster_shape.i - 1][monster_shape.j] != 8) {
					savedFruit1 = board[monster_shape.i - 1][monster_shape.j];
					monster_shape.i--;

				}
			}
			if (randomMonsterWalk == 3) {
				if (monster_shape.i < 14 && board[monster_shape.i + 1][monster_shape.j] != 4
					&& board[monster_shape.i + 1][monster_shape.j] != 3
					&& board[monster_shape.i + 1][monster_shape.j] != 6
					&& board[monster_shape.i + 1][monster_shape.j] != 7
					&& board[monster_shape.i + 1][monster_shape.j] != 8) {
					savedFruit1 = board[monster_shape.i + 1][monster_shape.j];
					monster_shape.i++;

				}
			}
		}
		board[monster_shape.i][monster_shape.j] = 5;
		if (monsterErase) {
			board[Mtempi][Mtempj] = 0;
			if (savedFruit1 == 5) {
				savedFruit1 = 0;
			}
			monsterErase = false;
		}
		loopCount1 = 0;
	} else {
		loopCount1++;
	}

	//movement of the monster2 board[i[j] = 6



	////////////////monster2 savedfruit2 monster_shape2 randy2 loopCount2 monster erase2
	if (numOfMonsters > 1) {
		var Mtempi2 = monster_shape2.i;
		var Mtempj2 = monster_shape2.j;


		if (loopCount2 == 1) {
			let randy2 = true;

			board[monster_shape2.i][monster_shape2.j] = savedFruit2;

			// walk towards pacman
			if (shape.j < monster_shape2.j) {//up
				if (monster_shape2.j > 0 && board[monster_shape2.i][monster_shape2.j - 1] != 4
					&& board[monster_shape2.i][monster_shape2.j - 1] != 3
					&& board[monster_shape2.i][monster_shape2.j - 1] != 5
					&& board[monster_shape2.i][monster_shape2.j - 1] != 7
					&& board[monster_shape2.i][monster_shape2.j - 1] != 8) {
					savedFruit2 = board[monster_shape2.i][monster_shape2.j - 1];
					monster_shape2.j--;
					randy2 = false;

				}
			}
			if (shape.j > monster_shape2.j) {//down

				if (monster_shape2.j < 9 && board[monster_shape2.i][monster_shape2.j + 1] != 4
					&& board[monster_shape2.i][monster_shape2.j + 1] != 3
					&& board[monster_shape2.i][monster_shape2.j + 1] != 5
					&& board[monster_shape2.i][monster_shape2.j + 1] != 7
					&& board[monster_shape2.i][monster_shape2.j + 1] != 8) {
					savedFruit2 = board[monster_shape2.i][monster_shape2.j + 1];
					monster_shape2.j++;
					randy2 = false;
				}
			}
			if (shape.i < monster_shape2.i) {//left

				if (monster_shape2.i > 0 && board[monster_shape2.i - 1][monster_shape2.j] != 4
					&& board[monster_shape2.i - 1][monster_shape2.j] != 3
					&& board[monster_shape2.i - 1][monster_shape2.j] != 5
					&& board[monster_shape2.i - 1][monster_shape2.j] != 7
					&& board[monster_shape2.i - 1][monster_shape2.j] != 8) {
					savedFruit2 = board[monster_shape2.i - 1][monster_shape2.j];
					monster_shape2.i--;
					randy2 = false;
				}
			}
			if (shape.i > monster_shape2.i) {//right

				if (monster_shape2.i < 14 && board[monster_shape2.i + 1][monster_shape2.j] != 4
					&& board[monster_shape2.i + 1][monster_shape2.j] != 3
					&& board[monster_shape2.i + 1][monster_shape2.j] != 5
					&& board[monster_shape2.i + 1][monster_shape2.j] != 7
					&& board[monster_shape2.i + 1][monster_shape2.j] != 8) {
					savedFruit2 = board[monster_shape2.i + 1][monster_shape2.j];
					monster_shape2.i++;
					randy2 = false;
				}
			}

			// if the monster is stuck go random
			if (randy2) {
				let randomMonsterWalk2 = Math.floor(Math.random() * 4);

				if (randomMonsterWalk2 == 0) {
					if (monster_shape2.j > 0 && board[monster_shape2.i][monster_shape2.j - 1] != 4

						&& board[monster_shape2.i][monster_shape2.j - 1] != 3
						&& board[monster_shape2.i][monster_shape2.j - 1] != 5
						&& board[monster_shape2.i][monster_shape2.j - 1] != 7
						&& board[monster_shape2.i][monster_shape2.j - 1] != 8) {
						savedFruit2 = board[monster_shape2.i][monster_shape2.j - 1];
						monster_shape2.j--;

					}
				}
				if (randomMonsterWalk2 == 1) {
					if (monster_shape2.j < 9 && board[monster_shape2.i][monster_shape2.j + 1] != 4
						&& board[monster_shape2.i][monster_shape2.j + 1] != 3
						&& board[monster_shape2.i][monster_shape2.j + 1] != 5
						&& board[monster_shape2.i][monster_shape2.j + 1] != 7
						&& board[monster_shape2.i][monster_shape2.j + 1] != 8) {
						savedFruit2 = board[monster_shape2.i][monster_shape2.j + 1];
						monster_shape2.j++;

					}
				}
				if (randomMonsterWalk2 == 2) {
					if (monster_shape2.i > 0 && board[monster_shape2.i - 1][monster_shape2.j] != 4
						&& board[monster_shape2.i - 1][monster_shape2.j] != 3
						&& board[monster_shape2.i - 1][monster_shape2.j] != 5
						&& board[monster_shape2.i - 1][monster_shape2.j] != 7
						&& board[monster_shape2.i - 1][monster_shape2.j] != 8) {
						savedFruit2 = board[monster_shape2.i - 1][monster_shape2.j];
						monster_shape2.i--;

					}
				}
				if (randomMonsterWalk2 == 3) {
					if (monster_shape2.i < 14 && board[monster_shape2.i + 1][monster_shape2.j] != 4
						&& board[monster_shape2.i + 1][monster_shape2.j] != 3
						&& board[monster_shape2.i + 1][monster_shape2.j] != 5
						&& board[monster_shape2.i + 1][monster_shape2.j] != 7
						&& board[monster_shape2.i + 1][monster_shape2.j] != 8) {
						savedFruit2 = board[monster_shape2.i + 1][monster_shape2.j];
						monster_shape2.i++;

					}
				}
			}
			board[monster_shape2.i][monster_shape2.j] = 6;
			if (monsterErase2) {
				board[Mtempi2][Mtempj2] = 0;
				if (savedFruit2 == 6) {
					savedFruit2 = 0;
				}
				monsterErase2 = false;
			}
			loopCount2 = 0;
		} else {
			loopCount2++;
		}
	}



	///////movement of monster 3 board[i][j] = 7
	////////////////monster3 savedfruit3 monster_shape3 randy3 loopCount3 monster erase3
	if (numOfMonsters > 2) {
		var Mtempi3 = monster_shape3.i;
		var Mtempj3 = monster_shape3.j;


		if (loopCount3 == 2) {
			let randy3 = true;

			board[monster_shape3.i][monster_shape3.j] = savedFruit3;

			// walk towards pacman
			if (shape.j < monster_shape3.j) {//up
				if (monster_shape3.j > 0 && board[monster_shape3.i][monster_shape3.j - 1] != 4
					&& board[monster_shape3.i][monster_shape3.j - 1] != 3
					&& board[monster_shape3.i][monster_shape3.j - 1] != 5
					&& board[monster_shape3.i][monster_shape3.j - 1] != 6
					&& board[monster_shape3.i][monster_shape3.j - 1] != 8) {
					savedFruit3 = board[monster_shape3.i][monster_shape3.j - 1];
					monster_shape3.j--;
					randy3 = false;

				}
			}
			if (shape.j > monster_shape3.j) {//down

				if (monster_shape3.j < 9 && board[monster_shape3.i][monster_shape3.j + 1] != 4
					&& board[monster_shape3.i][monster_shape3.j + 1] != 3
					&& board[monster_shape3.i][monster_shape3.j + 1] != 5
					&& board[monster_shape3.i][monster_shape3.j + 1] != 6
					&& board[monster_shape3.i][monster_shape3.j + 1] != 8) {
					savedFruit3 = board[monster_shape3.i][monster_shape3.j + 1];
					monster_shape3.j++;
					randy3 = false;
				}
			}
			if (shape.i < monster_shape3.i) {//left

				if (monster_shape3.i > 0 && board[monster_shape3.i - 1][monster_shape3.j] != 4
					&& board[monster_shape3.i - 1][monster_shape3.j] != 3
					&& board[monster_shape3.i - 1][monster_shape3.j] != 5
					&& board[monster_shape3.i - 1][monster_shape3.j] != 6
					&& board[monster_shape3.i - 1][monster_shape3.j] != 8) {
					savedFruit3 = board[monster_shape3.i - 1][monster_shape3.j];
					monster_shape3.i--;
					randy3 = false;
				}
			}
			if (shape.i > monster_shape3.i) {//right

				if (monster_shape3.i < 14 && board[monster_shape3.i + 1][monster_shape3.j] != 4
					&& board[monster_shape3.i + 1][monster_shape3.j] != 3
					&& board[monster_shape3.i + 1][monster_shape3.j] != 5
					&& board[monster_shape3.i + 1][monster_shape3.j] != 6
					&& board[monster_shape3.i + 1][monster_shape3.j] != 8) {
					savedFruit3 = board[monster_shape3.i + 1][monster_shape3.j];
					monster_shape3.i++;
					randy3 = false;
				}
			}

			// if the monster is stuck go random
			if (randy3) {
				let randomMonsterWalk3 = Math.floor(Math.random() * 4);

				if (randomMonsterWalk3 == 0) {
					if (monster_shape3.j > 0 && board[monster_shape3.i][monster_shape3.j - 1] != 4

						&& board[monster_shape3.i][monster_shape3.j - 1] != 3
						&& board[monster_shape3.i][monster_shape3.j - 1] != 5
						&& board[monster_shape3.i][monster_shape3.j - 1] != 6
						&& board[monster_shape3.i][monster_shape3.j - 1] != 8) {
						savedFruit3 = board[monster_shape3.i][monster_shape3.j - 1];
						monster_shape3.j--;

					}
				}
				if (randomMonsterWalk3 == 1) {
					if (monster_shape3.j < 9 && board[monster_shape3.i][monster_shape3.j + 1] != 4
						&& board[monster_shape3.i][monster_shape3.j + 1] != 3
						&& board[monster_shape3.i][monster_shape3.j + 1] != 5
						&& board[monster_shape3.i][monster_shape3.j + 1] != 6
						&& board[monster_shape3.i][monster_shape3.j + 1] != 8) {
						savedFruit3 = board[monster_shape3.i][monster_shape3.j + 1];
						monster_shape3.j++;

					}
				}
				if (randomMonsterWalk3 == 2) {
					if (monster_shape3.i > 0 && board[monster_shape3.i - 1][monster_shape3.j] != 4
						&& board[monster_shape3.i - 1][monster_shape3.j] != 3
						&& board[monster_shape3.i - 1][monster_shape3.j] != 5
						&& board[monster_shape3.i - 1][monster_shape3.j] != 6
						&& board[monster_shape3.i - 1][monster_shape3.j] != 8) {
						savedFruit3 = board[monster_shape3.i - 1][monster_shape3.j];
						monster_shape3.i--;

					}
				}
				if (randomMonsterWalk3 == 3) {
					if (monster_shape3.i < 14 && board[monster_shape3.i + 1][monster_shape3.j] != 4
						&& board[monster_shape3.i + 1][monster_shape3.j] != 3
						&& board[monster_shape3.i + 1][monster_shape3.j] != 5
						&& board[monster_shape3.i + 1][monster_shape3.j] != 6
						&& board[monster_shape3.i + 1][monster_shape3.j] != 8) {
						savedFruit3 = board[monster_shape3.i + 1][monster_shape3.j];
						monster_shape3.i++;

					}
				}
			}
			board[monster_shape3.i][monster_shape3.j] = 7;
			if (monsterErase3) {
				board[Mtempi3][Mtempj3] = 0;
				if (savedFruit3 == 7) {
					savedFruit3 = 0;
				}
				monsterErase3 = false;
			}
			loopCount3 = 0;
		} else {
			loopCount3++;
		}
	}


	///////movement of monster 4 board[i][j] = 8
	////////////////monster4 savedfruit4 monster_shape4 randy4 loopCount4 monster erase4
	if (numOfMonsters > 3) {
		var Mtempi4 = monster_shape4.i;
		var Mtempj4 = monster_shape4.j;


		if (loopCount4 == 2) {
			let randy4 = true;

			board[monster_shape4.i][monster_shape4.j] = savedFruit4;

			// walk towards pacman
			if (shape.j < monster_shape4.j) {//up
				if (monster_shape4.j > 0 && board[monster_shape4.i][monster_shape4.j - 1] != 4
					&& board[monster_shape4.i][monster_shape4.j - 1] != 3
					&& board[monster_shape4.i][monster_shape4.j - 1] != 5
					&& board[monster_shape4.i][monster_shape4.j - 1] != 6
					&& board[monster_shape4.i][monster_shape4.j - 1] != 7) {
					savedFruit4 = board[monster_shape4.i][monster_shape4.j - 1];
					monster_shape4.j--;
					randy4 = false;

				}
			}
			if (shape.j > monster_shape4.j) {//down

				if (monster_shape4.j < 9 && board[monster_shape4.i][monster_shape4.j + 1] != 4
					&& board[monster_shape4.i][monster_shape4.j + 1] != 3
					&& board[monster_shape4.i][monster_shape4.j + 1] != 5
					&& board[monster_shape4.i][monster_shape4.j + 1] != 6
					&& board[monster_shape4.i][monster_shape4.j + 1] != 7) {
					savedFruit4 = board[monster_shape4.i][monster_shape4.j + 1];
					monster_shape4.j++;
					randy4 = false;
				}
			}
			if (shape.i < monster_shape4.i) {//left

				if (monster_shape4.i > 0 && board[monster_shape4.i - 1][monster_shape4.j] != 4
					&& board[monster_shape4.i - 1][monster_shape4.j] != 3
					&& board[monster_shape4.i - 1][monster_shape4.j] != 5
					&& board[monster_shape4.i - 1][monster_shape4.j] != 6
					&& board[monster_shape4.i - 1][monster_shape4.j] != 7) {
					savedFruit4 = board[monster_shape4.i - 1][monster_shape4.j];
					monster_shape4.i--;
					randy4 = false;
				}
			}
			if (shape.i > monster_shape4.i) {//right

				if (monster_shape4.i < 14 && board[monster_shape4.i + 1][monster_shape4.j] != 4
					&& board[monster_shape4.i + 1][monster_shape4.j] != 3
					&& board[monster_shape4.i + 1][monster_shape4.j] != 5
					&& board[monster_shape4.i + 1][monster_shape4.j] != 6
					&& board[monster_shape4.i + 1][monster_shape4.j] != 7) {
					savedFruit4 = board[monster_shape4.i + 1][monster_shape4.j];
					monster_shape4.i++;
					randy4 = false;
				}
			}

			// if the monster is stuck go random
			if (randy4) {
				let randomMonsterWalk4 = Math.floor(Math.random() * 4);

				if (randomMonsterWalk4 == 0) {
					if (monster_shape4.j > 0 && board[monster_shape4.i][monster_shape4.j - 1] != 4

						&& board[monster_shape4.i][monster_shape4.j - 1] != 3
						&& board[monster_shape4.i][monster_shape4.j - 1] != 5
						&& board[monster_shape4.i][monster_shape4.j - 1] != 6
						&& board[monster_shape4.i][monster_shape4.j - 1] != 7) {
						savedFruit4 = board[monster_shape4.i][monster_shape4.j - 1];
						monster_shape4.j--;

					}
				}
				if (randomMonsterWalk4 == 1) {
					if (monster_shape4.j < 9 && board[monster_shape4.i][monster_shape4.j + 1] != 4
						&& board[monster_shape4.i][monster_shape4.j + 1] != 3
						&& board[monster_shape4.i][monster_shape4.j + 1] != 5
						&& board[monster_shape4.i][monster_shape4.j + 1] != 6
						&& board[monster_shape4.i][monster_shape4.j + 1] != 7) {
						savedFruit4 = board[monster_shape4.i][monster_shape4.j + 1];
						monster_shape4.j++;

					}
				}
				if (randomMonsterWalk4 == 2) {
					if (monster_shape4.i > 0 && board[monster_shape4.i - 1][monster_shape4.j] != 4
						&& board[monster_shape4.i - 1][monster_shape4.j] != 3
						&& board[monster_shape4.i - 1][monster_shape4.j] != 5
						&& board[monster_shape4.i - 1][monster_shape4.j] != 6
						&& board[monster_shape4.i - 1][monster_shape4.j] != 7) {
						savedFruit4 = board[monster_shape4.i - 1][monster_shape4.j];
						monster_shape4.i--;

					}
				}
				if (randomMonsterWalk4 == 3) {
					if (monster_shape4.i < 14 && board[monster_shape4.i + 1][monster_shape4.j] != 4
						&& board[monster_shape4.i + 1][monster_shape4.j] != 3
						&& board[monster_shape4.i + 1][monster_shape4.j] != 5
						&& board[monster_shape4.i + 1][monster_shape4.j] != 6
						&& board[monster_shape4.i + 1][monster_shape4.j] != 7) {
						savedFruit4 = board[monster_shape4.i + 1][monster_shape4.j];
						monster_shape4.i++;

					}
				}
			}
			board[monster_shape4.i][monster_shape4.j] = 8;
			if (monsterErase4) {
				board[Mtempi4][Mtempj4] = 0;
				if (savedFruit4 == 8) {
					savedFruit4 = 0;
				}
				monsterErase4 = false;
			}
			loopCount4 = 0;
		} else {
			loopCount4++;
		}
	}


	//if a monster got pacman
	monsterCaughtPacman();
	if (numOfMonsters > 1) {
		monsterCaughtPacman2();
	}
	if (numOfMonsters > 2) {
		monsterCaughtPacman3();
	}
	if (numOfMonsters > 3) {
		monsterCaughtPacman4();
	}



	//if pcaman caught the bonus shape
	bounus_shapeCaughtFunc();

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





	if (time_elapsed > 30 && Time_once) {
		var nextEmptyCell = findRandomEmptyCell(board);
		board[nextEmptyCell[0]][nextEmptyCell[1]] = 15;
		Time_once = false;
	}

	//if paceman caught the time
	if (board[shape.i][shape.j] == 15) {
		bounus_time = 10000;
		quit = true;
		bounus_life.play();
		
	}

	if (time_elapsed > 20 && Time_once_life) {
		var nextEmptyCell = findRandomEmptyCell(board);
		board[nextEmptyCell[0]][nextEmptyCell[1]] = 16;
		Time_once_life = false;
	}

	//if pacman caught the lives
	if (board[shape.i][shape.j] == 16) {
		lives = lives + 2;
		bounus_life.play();
		
	}



	if (lives > 0) {
		board[shape.i][shape.j] = 2;
	}

	let timer = lblTtime.value;
	if (quit) {
		quit = false;
	}
	else {
		var currentTime = new Date();
		time_elapsed = Math.floor((currentTime - start_time - total_pause - bounus_time) / 1000);
	}


	if (time_elapsed >= timer) {
		done = true;
		window.clearInterval(interval);
		blockerSound.volume = 0.18;
		if(score < 100){
			window,alert("You are bettert than " + score + " points!");
		}
		else{
			victorySound.play();
			window.alert("Winner!!!");
		}




	} else {
		Draw();
	}
}


function QuitToMainFunc() {

	let start_time = new Date();
	quit = true;
	blockerSound.volume = 0.18;
	let ans = confirm("Are you sure you want to quit to the main menu?");

	if (ans) {
		earaseRegText();
		earaseLogText();
		blockerSound.volume = 0.5;
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
	else {
		let end_time = new Date();
		let pause = end_time - start_time;
		total_pause += pause;

		blockerSound.volume = 0.5;
		blockerSound.play();
	}
}

function restart() {

	let start_time = new Date();
	quit = true;
	blockerSound.volume = 0.18;
	let restartAns = confirm("restart game?");

	if (restartAns) {
		window.clearInterval(interval);
		settingToStart();

	}
	else {
		let end_time = new Date();
		let pause = end_time - start_time;
		total_pause += pause;
		blockerSound.volume = 1;
		blockerSound.play();
	}
}





function monsterCaughtPacman() {
	if (monster_shape.i == shape.i && monster_shape.j == shape.j) {
		hurt.play();
		lives--;
		score = score - 10;
		if (savedFruit1 == 10) {
			score = score + 5;
			food--;
			lblNumOfBallsLeft.value--;
		}
		if (savedFruit1 == 11) {
			score = score + 15;
			food--;
			lblNumOfBallsLeft.value--;
		}
		if (savedFruit1 == 12) {
			score = score + 25;
			food--;
			lblNumOfBallsLeft.value--;
		}
		savedFruit1 = 0;
		if (lives > 0) {
			var nextEmptyCell = findRandomEmptyCell(board);
			board[14][9] = 5;
			if (numOfMonsters > 1) {
				board[monster_shape2.i][monster_shape2.j] = savedFruit2;
				monster_shape2.i = 0;
				monster_shape2.j = 9;
				savedFruit2 = 0;

			}
			if (numOfMonsters > 2) {
				board[monster_shape3.i][monster_shape3.j] = savedFruit3;
				monster_shape3.i = 14;
				monster_shape3.j = 0;
				savedFruit3 = 0;

			}
			if (numOfMonsters > 3) {
				board[monster_shape4.i][monster_shape4.j] = savedFruit4;
				monster_shape4.i = 0;
				monster_shape4.j = 0;
				savedFruit4 = 0;
			}
			board[nextEmptyCell[0]][nextEmptyCell[1]] = 2;
			monster_shape.i = 14;
			monster_shape.j = 9;

			board[shape.i][shape.j] = 0;
			shape.i = nextEmptyCell[0];
			shape.j = nextEmptyCell[1];
			eye_bool = true;
		}

	}
}

function monsterCaughtPacman2() {
	if (monster_shape2.i == shape.i && monster_shape2.j == shape.j) {
		hurt.play();
		lives--;
		score = score - 50;
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
		if (lives > 0) {
			var nextEmptyCell1 = findRandomEmptyCell(board);
			board[0][9] = 6;
			board[monster_shape.i][monster_shape.j] = savedFruit1;
			savedFruit1 = 0;
			board[nextEmptyCell1[0]][nextEmptyCell1[1]] = 2;
			monster_shape.i = 14;
			monster_shape.j = 9;
			monster_shape2.i = 0;
			monster_shape2.j = 9;
			board[monster_shape.i][monster_shape.j] = 0;
			board[shape.i][shape.j] = 0;
			shape.i = nextEmptyCell1[0];
			shape.j = nextEmptyCell1[1];

			eye_bool = true;
		}
		if (numOfMonsters > 2) {
			board[monster_shape3.i][monster_shape3.j] = savedFruit3;
			monster_shape3.i = 14;
			monster_shape3.j = 0;
			savedFruit3 = 0;
		}
		if (numOfMonsters > 3) {
			board[monster_shape4.i][monster_shape4.j] = savedFruit4;
			monster_shape4.i = 0;
			monster_shape4.j = 0;
			savedFruit4;
		}

	}
}

function monsterCaughtPacman3() {
	if (monster_shape3.i == shape.i && monster_shape3.j == shape.j) {
		hurt.play();
		lives--;
		score = score - 10;
		if (savedFruit3 == 10) {
			score = score + 5;
			food--;
			lblNumOfBallsLeft.value--;
		}
		if (savedFruit3 == 11) {
			score = score + 15;
			food--;
			lblNumOfBallsLeft.value--;
		}
		if (savedFruit3 == 12) {
			score = score + 25;
			food--;
			lblNumOfBallsLeft.value--;
		}
		savedFruit3 = 0;
		if (lives > 0) {
			var nextEmptyCell = findRandomEmptyCell(board);
			board[14][0] = 7;
			board[monster_shape.i][monster_shape.j] = savedFruit1;
			savedFruit1 = 0;
			board[monster_shape2.i][monster_shape2.j] = savedFruit2;
			savedFruit2 = 0;
			board[nextEmptyCell[0]][nextEmptyCell[1]] = 2;
			monster_shape.i = 14;
			monster_shape.j = 9;
			monster_shape2.i = 0;
			monster_shape2.j = 9;
			monster_shape3.i = 14;
			monster_shape3.j = 0;
			board[shape.i][shape.j] = 0;
			shape.i = nextEmptyCell[0];
			shape.j = nextEmptyCell[1];
			eye_bool = true;
		}
		if (numOfMonsters > 3) {
			board[monster_shape4.i][monster_shape4.j] = savedFruit4;
			monster_shape4.i = 0;
			monster_shape4.j = 0;
			savedFruit4 = 0;
		}

	}
}



function monsterCaughtPacman4() {
	if (monster_shape4.i == shape.i && monster_shape4.j == shape.j) {
		hurt.play();
		lives--;

		score = score - 10;
		if (savedFruit4 == 10) {
			score = score + 5;
			food--;
			lblNumOfBallsLeft.value--;
		}
		if (savedFruit4 == 11) {
			score = score + 15;
			food--;
			lblNumOfBallsLeft.value--;
		}
		if (savedFruit4 == 12) {
			score = score + 25;
			food--;
			lblNumOfBallsLeft.value--;
		}
		savedFruit4 = 0;
		if (lives > 0) {
			var nextEmptyCell = findRandomEmptyCell(board);
			board[0][0] = 8;
			board[monster_shape.i][monster_shape.j] = savedFruit1;
			savedFruit1 = 0;
			board[monster_shape2.i][monster_shape2.j] = savedFruit2;
			savedFruit2 = 0;
			board[monster_shape3.i][monster_shape3.j] = savedFruit3;
			savedFruit3 = 0;
			board[nextEmptyCell[0]][nextEmptyCell[1]] = 2;
			monster_shape.i = 14;
			monster_shape.j = 9;
			monster_shape2.i = 0;
			monster_shape2.j = 9;
			monster_shape3.i = 14;
			monster_shape3.j = 0;
			monster_shape4.i = 0;
			monster_shape4.j = 0;
			board[shape.i][shape.j] = 0;
			shape.i = nextEmptyCell[0];
			shape.j = nextEmptyCell[1];
			eye_bool = true;
		}


	}
}

function bounus_shapeCaughtFunc() {
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
		savedFruit = 0;
	}
}


