// Assignment Code
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add Event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Array
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "="];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Array for lower case to upper case
//var upperCase = lowerCase.map(lowerCase => lowerCase.toUpperCase());

//Variables for password generator
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var passwordLength = "";
var uppercaseCheck = "";
var numberCheck = "";
var specialCheck = "";

// Function asking user for password length
function chooseLength() {
    passwordLength = prompt(
        "How many characters would you like your password to be? (Must be 8-128 characters)."
    );
// Verify the user input is valid
if (passwordLength < 8) {
    alert("Password length must be a number between 8-128 characters");
    determineLength();
}
if (passwordLength > 128) {
    alert("Invalid input! Password must be no more than 128 characters!");
    chooseLength();
}
}
