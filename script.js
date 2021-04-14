// Assignment Code
//var generateBtn = document.querySelector("#generate");

//Write password to the #password input
/*function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  */

// Add Event listener to generate button
//generateBtn.addEventListener("click", writePassword);

// Array for lower case to upper case
//var upperCase = lowerCase.map(lowerCase => lowerCase.toUpperCase());

//Variables for password generator
var generateBtn = document.querySelector("#generate");
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var specialCheck = "";
var passwordLength = "";
var upperCaseCheck = "";
var numberCheck = "";
var specialCheck = "";

//var writePassword = "";

// Function asking user for desired password length
function chooseLength() {
  passwordLength = prompt(
    "How many characters would you like your password to be? (Must be 8-128 characters)."
  );
  // Verifying the the user input is valid or invalid
  if (passwordLength < 8) {
    alert(
      "Invalid Input! Password length must be a number between 8-128 characters!"
    );
    chooseLength();
  }
  if (passwordLength > 128) {
    alert(
      "Invalid input! Password length must be a number between 8-128 characters"
    );
    chooseLength();
  }
  return passwordLength;
}

// Function asking user if they want uppercase characters included with their password
function chooseUpper() {
  upperCaseCheck = prompt(
    "Do you want uppercase letters in your password? \n(Yes or No)"
  );

  upperCaseCheck = upperCaseCheck.toLowerCase();

  if (upperCaseCheck === "yes" || upperCaseCheck === "y") {
    upperCaseCheck = true;
    return upperCaseCheck;
  }
  if (upperCaseCheck === "no" || upperCaseCheck === "n") {
    upperCaseCheck = false;
    return upperCaseCheck;
  } else {
    chooseUpper();
  }
  return upperCaseCheck;
}

// Function asking user if they want numbers included in password
function chooseNumbers() {
  numberCheck = prompt(
    "Would you like numbers included in your password? \n(Yes or No)"
  );

  numberCheck = numberCheck.toLowerCase();

  if (numberCheck === "yes" || numberCheck === "y") {
    numberCheck = true;
    return numberCheck;
  } else if (numberCheck === "no" || numberCheck === "n") {
    numberCheck = false;
    return numberCheck;
  }
}
// Function asking user if they want special characters in their password
function chooseSpecial() {
  specialCheck = prompt(
    "Would you like to include special characters in your password? \n(Yes or No)"
  );
  specialCheck = specialCheck.toLowerCase();

  if (specialCheck === "yes" || specialCheck === "y") {
    specialCheck = true;
    return specialCheck;
  } else if (specialCheck === "no" || specialCheck === "n") {
    specialCheck = false;
    return specialCheck;
  }
}

// Function for generating random password
var generatePassword = function () {
  chooseLength();
  console.log(passwordLength);
  chooseUpper();
  console.log(upperCaseCheck);
  chooseNumbers();
  console.log(numberCheck);
  chooseSpecial();
  console.log(specialCheck);

  var characters = lowerCaseChar;
  var password = "";
  if (upperCaseCheck && numberCheck && specialCheck) {
    characters += upperCaseChar + numberChar + specialChar;
  }
  if (upperCaseCheck && numberCheck) {
    characters += upperCaseChar + numberChar;
  }
  if (numberCheck && specialCheck) {
    characters += numberChar + specialChar;
  }
  if (upperCaseCheck && specialCheck) {
    characters += upperCaseChar + specialChar;
  }
  if (upperCaseCheck) {
    characters += upperCaseChar;
  }
  if (numberCheck) {
    characters += numberChar;
  }
  if (specialCheck) {
    characters += specialChar;
  } else {
    characters === lowerCaseChar;
  }

  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

// Function for writing to the #password input
function writePassword() {
  var password = "";
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Event listener to generate password once the button is clicked
generateBtn.addEventListener("click", writePassword);
