var userDOB = document.querySelector("#user-dob");
var luckyNumber = document.querySelector("#lucky-number");
var btnBirthdayCheck = document.querySelector("#btn-birthday-check");
var outputBox = document.querySelector("#show-message");

btnBirthdayCheck.addEventListener("click",checkBirthdayHandler)

function checkBirthdayHandler() {
    var userInput = userDOB.value.replaceAll('-','');
    var sum = 0;
    console.log(luckyNumber.value);
    for(var i = 0 ; i < userInput.length ; i++) {
        var digitFromDOB = parseInt(userInput[i]);
        sum += digitFromDOB;
    }
    console.log(sum);
    if((digitFromDOB%(luckyNumber.value))===0) {
        outputBox.innerText = "Yay! Your Birthday is Lucky";
    } else {
        outputBox.innerText = "Sorry, Your Birthday is not Lucky";
    }
}