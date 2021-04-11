// Assignment Code
var generateBtn = docment.querySelector("#generate");

//Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add Event listener to generate button
generateBtn.addEventListener("click", writePassword);