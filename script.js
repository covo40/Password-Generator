// Characters
var generateBtn = document.querySelector("#generate");

    var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",",r","s","t","u","v","w","x","y","z";
    var numbers  = ["1","2","3","4","5","6","7","8","9","0"];
    var special = ["!", "@", "#", "$", "%", "?", "&", "*","<", ">"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
    // ---------GRAB USER INPUTS-------------
    var userUpper = confirm("Do you want uppercase characters in your password?");
    var userLower = confirm("Do you want lowercase characters in your password");
    var userNumber = confirm("Do you want numbers in your password?");
    var userSpecial = confirm("Do you want special characters in your password?");
    

    // Define a variable to hold all possible numbers
    var submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", pressButton)
    function pressButton() {
      var possibleSelection = []
      var randomizedSelection = possibleSelection
    }

    if (upperCase == true) {
    }
    if (lowerCase == true) {
    }
    if (number == true) {
    }
    if (special == true) {
    }
    
    // --------EVALUATE USER INPUTS----------
    var confirmupperCase = document.getElementById("Upper");
    var confirmlowerCase = document.getElementById("Lower");
    var confirmnumber = document.getElementById("Number");
    var confirmspecial = document.getElementById("Special")

    // -----------GENERATE THE PASSWORD-------------
    var randomLetter = ""
    var randomUpperCase = document.getElementById[Math.floor(Math.random * upperCase.length)];
    var randomLowerCase = document.getElementById[Math.floor(Math.random) * lowerCase.length];
    var randomNumber = document.getElementById[Math.floor(Math.random * number.length)];
    var randomSpecial = document.getElementById[Math.floor(Math.random * special.length)];

while (randomLetter.length < 8) {
upper += randomLetter;
upper ++;
} 
console.log(upperCase);
console.log(lowerCase);
console.log(number);
console.log(special);


// Assignment Code
var generateBtn = document.querySelector("#generate"); 
function writePassword() {
  //Give values to function generatePassword 
// generatePassword() is a function that returns a string in the end
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
