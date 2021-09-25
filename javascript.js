var userDOB = document.querySelector("#user-dob");
var luckyNumber = document.querySelector("#lucky-number");
var btnBirthdayCheck = document.querySelector("#btn-birthday-check");

btnBirthdayCheck.addEventListener("click",checkBirthdayHandler)

function checkBirthdayHandler() {
    console.log(userDOB.value);
}