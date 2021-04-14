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

// Array for lower case to upper case
//var upperCase = lowerCase.map(lowerCase => lowerCase.toUpperCase());

//Variables for password generator
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var specialCheck = "";
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
    alert("Invalid Input! Password length must be a number between 8-128 characters!");
    chooseLength();
}
if (passwordLength > 128) {
    alert("Invalid input! Password length must be a number between 8-128 characters");
    chooseLength();
}
return passwordLength;
}

// Function asking user if they want uppercase characters
function chooseUpper() {
    uppercaseCheck = prompt("Do you want uppercase letters in your password? \n(Yes or No)");

    uppercaseCheck = uppercaseCheck.toLowerCase();
    
    if (uppercaseCheck === "yes" || uppercaseCheck === "y") {
        uppercaseCheck = true;
        return uppercaseCheck;
    }
    if (uppercaseCheck === "no" || uppercaseCheck === "n") {
        uppercaseCheck = false;
        return uppercaseCheck;
        chooseUpper();
    }
    return uppercaseCheck;
}