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
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var specialConfirm = "";
var passwordLength = "";
var upperCaseConfirm = "";
var numberConfirm = "";

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
  upperCaseConfirm = prompt(
    "Do you want uppercase letters in your password? \n(Yes or No)"
  );

  upperCaseConfirm = upperCaseConfirm.toLowerCase();

  if (upperCaseConfirm === "yes" || upperCaseConfirm === "y") {
    upperCaseConfirm = true;
    return upperCaseConfirm;
  }
  if (upperCaseConfirm === "no" || upperCaseConfirm === "n") {
    upperCaseConfirm = false;
    return upperCaseConfirm;
  } else {
    chooseUpper();
  }
  return upperCaseConfirm;
}

// Function asking user if they want numbers included in password
function chooseNumbers() {
  numberConfirm = prompt(
    "Would you like numbers included in your password? \n(Yes or No)"
  );

  numberConfirm = numberConfirm.toLowerCase();

  if (numberConfirm === "yes" || numberConfirm === "y") {
    numberConfirm = true;
    return numberConfirm;
  } else if (numberConfirm === "no" || numberConfirm === "n") {
    numberConfirm = false;
    return numberConfirm;
  }
}
// Function asking user if they want special characters in their password
function chooseSpecial() {
  specialConfirm = prompt(
    "Would you like to include special characters in your password? \n(Yes or No)"
  );
  specialConfirm = specialConfirm.toLowerCase();

  if (specialConfirm === "yes" || specialConfirm === "y") {
    specialConfirm = true;
    return specialConfirm;
  } else if (specialConfirm === "no" || specialConfirm === "n") {
    specialConfirm = false;
    return specialConfirm;
  }
}

// Function for generating random password
var generatePassword = function () {
  chooseLength();
  console.log(passwordLength);
  chooseUpper();
  console.log(upperCaseConfirm);
  chooseNumbers();
  console.log(numberConfirm);
  chooseSpecial();
  console.log(specialConfirm);

  var characters = lowerCase;
  var password = "";
  if (upperCaseConfirm && numberConfirm && specialConfirm) {
    characters += upperCase + numbers + special;
  }
  if (upperCaseConfirm && numberConfirm) {
    characters += upperCase + numbers;
  }
  if (numberConfirm && specialConfirm) {
    characters += numbers + special;
  }
  if (upperCaseConfirm && specialConfirm) {
    characters += upperCase + special;
  }
  if (upperCaseConfirm) {
    characters += upperCase;
  }
  if (numberConfirm) {
    characters += numbers;
  }
  if (specialConfirm) {
    characters += special;
  } else {
    characters === lowerCase;
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
