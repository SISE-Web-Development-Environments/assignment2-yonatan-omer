$(document).ready(function () {
	alert("in jquery.js");
})
function checkRegisterInput() {

    let formValid = true;

    let number = /([0-9])/;
    let alphabets = /([a-zA-Z])/;

    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if ($('#username').val().length == 0) {
        formValid = false;
        window.alert("Must enter a username");
        return;

    }
    if ($('#regPswd').val().length < 6) {
        formValid = false;
        window.alert("Your passwords must contain only letters and numbers")
        return;
    }
    if (!$('#regPswd').val().match(number)) {
        formValid = false;
        window.alert("Your passwords must contain only letters and numbers")
        return;
    }
    if (!$('#regPswd').val().match(alphabets)) {
        formValid = false;
        window.alert("Password must consist of numbers and letters")
        return;
    }
    if ($('#firstName').val().length == 0) {
        formValid = false;
        window.alert("Must enter a first name");
        return;

    }
    if ($('#firstName').val().match(number)) {
        formValid = false;
        window.alert("First Name should include only characters")
        return;
    }
    if ($('#lastName').val().length == 0) {
        formValid = false;
        window.alert("Must enter a last name");
        return;

    }

    if ($('#lastName').val().match(number)) {
        formValid = false;
        window.alert("Last Name should include only characters")
        return;
    }

    if (!$('#email').val().match(regex)) {
        formValid = false;
        window.alert("invalid email")
        return;

    }


    if (formValid) {

        let username = document.getElementById("username").value;

        let pass = document.getElementById("regPswd").value;

        localStorage.setItem(username, pass);

        alert("Registeration completed successfully, you can login now!");

        earaseLogText();

        LoginFunction();

        return true;

    }

}
function checkSettings() {
/*
    let numberOfBalls = document.getElementById("numOfBalls").value;
    let timeToPlay = document.getElementById("timer").value;
    let numberOfMonster = document.getElementById("monster").value;
  
    let upK = document.getElementById("up").value;
    let downK = document.getElementById("down").value;
    let leftK = document.getElementById("left").value;
    let rightK = document.getElementById("right").value;
    window.alert("a");
  
    if (numberOfBalls > 90 || numberOfBalls < 50) {
        window.alert("number of balls must be between 50 and 90");
        return;
    }
    
    if(timeToPlay < 60){
        window.alert("game time must be at least 60 seconds")
        return;
    }
    if(numberOfMonster < 1 || numberOfMonster > 4){
        window.alert("number of monsters must be between 1 and 4");
        return;
    }
    if(upK.length == 0){
        alert("please enter an up key");
        return;
    }
    if(downK.length == 0){
        alert("please enter an down key");
        return;
    }
    if(leftK.length == 0){
        alert("please enter an left key");
        return;
    }
    if(rightK.length == 0){
        alert("please enter an right key");
        return;
    }
*/
   // document.getElementById("settingsShown").style = "display: 'block;"
    WelcomeFunction();
    //settingToStart();

}






