// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["~", "`", "!", "#", "$", "%", "^", "&", "*", "+", "=", "-", "[", "]", ";", ",", "/", "{", "}", "|", ":", "<", ">", "?"];




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria







var instructionsInput = prompt("How many characters would you like to have in your password (needs to be between 8 and 100 characters)?")







if (instructionsInput < 8) {

  alert("The password cannot be less than 8 characters.")

}

if (instructionsInput > 100) {

  alert("The password cannot be more than 100 characters.")

}

if (isNaN(instructionsInput)) {

  alert("Character is not a number.")
}

else {
  var lowerCaseYes = confirm("Would you like to include lower case letters?")
  if (lowerCaseYes === true) {
    array.push(lowerCase)
  }

  var upperCaseYes = confirm("Would you like to include upper case letters?")
  if (upperCaseYes === true) {
    array.push(upperCase)
  }
  var numbersYes = confirm("Would you like to include numbers?")
  if (lowerCaseYes === true) {
    array.push(numbers)
  }
  var symbolsYes = confirm("Would you like to include symbols?")
  if (lowerCaseYes === true) {
    array.push(lowerCase)
  }
}




















// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page