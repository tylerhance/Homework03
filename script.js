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
var upperCase = lowerCase.map(lowerCase => lowerCase.toUpperCase());

// Main function to generate password
function generatePassword(){
    var password = "";
}
var passLength = Math.floor(Math.random() * password.length);
//Prompting user input for password
var userInput = window.prompt("How many characters will your password be? Must be 8-128 characters!");

if (passLength < 8) {
    window.alert("Invalid input! Password must be AT LEAST 8 characters!");
    console.log("----")
};

if (passLength > 128) {
    window.alert("Invalid input! Password can't exceed 128 characters!");
    
};

function generatePassword() {
	return password;
}
