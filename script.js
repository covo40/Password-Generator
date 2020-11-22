//Assignment Code
var specialChar = "!%&,*-./<>?~"; 11
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWYYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";

var generateBtn = document.querySelector("#generate");

alert("Click on ok if you would like to generate a password.");

var passLength = prompt("How many characters will your password have? Choose between 6 and 100.");

while (passLength < 6 || passLength > 100) {
    passLength = prompt("Password length must be 6-100 characters. Try again.")
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

var confirmSpecialCharacter = confirm("Do you need special characters in your password?");
if (confirmSpecialCharacter === true) {
}
else {
}

var confirmUpperCase = confirm("Do you need uppercase letters in your password?");
if (confirmUpperCase === true) {
}
else {
}
var confirmLowerCase = confirm("Do you need lowercase letters in your password?");
if (confirmLowerCase === true) {
}
else {
}
var confirmNumber = confirm("Do you need numbers?");
if (confirmNumber === true) {
}
else {
}
alert("Click on 'Generate Password' to get your new password.  Keep clicking the 'Generate Password' button for more passwords with the same parameters you chose.");

function generatePassword() {
    var newPw = "";
    var userChoiceLength = parseInt(passLength);
    output = "";


    if (confirmSpecialCharacter) {
        newPw += specialChar
    }
    if (confirmUpperCase) {
        newPw += upperCase
    }
    if (confirmLowerCase) {
        newPw += lowerCase
    }
    if (confirmNumber) {
        newPw += number
    }

    for (let i = 0; i < userChoiceLength; i++) {
        output += newPw.charAt(Math.floor(Math.random() * newPw.length));
    }
    return output;

}

generateBtn.addEventListener("click", writePassword);





