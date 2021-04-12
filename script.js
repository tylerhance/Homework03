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
/*var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "="];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
*/

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChar = "0123456789";
var specialChar = "!@#$%^&*()_+-=<>?,./:;'{}[]\|";

// Array for lower case to upper case
//var upperCase = lowerCase.map(lowerCase => lowerCase.toUpperCase());

// Main function to generate password
function generatePassword(){
    var password = "";
    var passwordChar = "";
}

//Prompt for user to select password length
var passwordLength = prompt("How long would you like your password to be? Must be between 8-128 characters.");
passwordLength = parseInt(passwordLength);

// Validate the user input
if(passwordLength < 8) {
    alert("Invalid input! Password must be at least 8 characters!");
}

if(passwordLength > 128) {
    alert("Invalid input! Password can't exceed 128 characters!");
}

// Confirms lowercase true/false
var lowercaseUserChoice = confirm("Would you like lowercase characters?");

if(lowercaseUserChoice) {
    passwordChar += lowercaseChar;
}

// Confirms uppercase true/false
var uppercaseUserChoice = confirm("Would you like uppercase characters?");

if(uppercaseUserChoice) {
    passwordChar += uppercaseChar;
}

// Confirms boolean for numbers
var numberUserChoice = confirm("Would you like to add some numbers?");

if(numberUserChoice) {
    passwordChar += numericChar;
}

var specialCharUserChoice = confirm("Would you like to add some special characters too?");
 
if (specialCharUserChoice) {
    passwordChar += specialChar;
}

for (var i = 0; i < passwordLength; i++); {
    password = passwordChar[Math.floor(Math.random() * passwordChar.length)]
}

