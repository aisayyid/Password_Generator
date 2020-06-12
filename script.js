
var generateBtn = document.querySelector("#generate");

// Created arrays needed for all possible characters included in the final password.

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["~", "`", "!", "#", "$", "%", "^", "&", "*", "+", "=", "-", "[", "]", ";", ",", "/", "{", "}", "|", ":", "<", ">", "?"];

// Empty array created to push all arrays picked from the users choice from confirms.

var finalPassword = []

// Empty array that will contain the final characters that were randomly selected from the finalPassword array to create the randomly generated password.

var generatedPassword = []



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);

// Function created to begin collecting all the info needed, and putting the password together

function generatePassword() {

  //Prompt to gather an input from the user on the number of characters that the password will contain.

  var instructionsInput = prompt("How many characters would you like to have in your password (needs to be 8-128 characters)?")

  //Conditions of password, that make the choices of characters to include pop up only if the amount of characters is acceptable.  If the number is below 8, more than 128, or not a number, an appropriate alert pops up and the user has to start over.

  if (instructionsInput < 8) {

    alert("The password cannot be less than 8 characters.")

  } else if (instructionsInput > 128) {

    alert("The password cannot be more than 128 characters.")

  } else if (isNaN(instructionsInput)) {

    alert("Character is not a number.")
  }

  //
  else {
    var lowerCaseYes = confirm("Would you like to include lower case letters?")
    if (lowerCaseYes === true) {
      finalPassword.push(lowerCase)
    }

    var upperCaseYes = confirm("Would you like to include upper case letters?")
    if (upperCaseYes === true) {
      finalPassword.push(upperCase)
    }
    var numbersYes = confirm("Would you like to include numbers?")
    if (numbersYes === true) {
      finalPassword.push(numbers)
    }
    var symbolsYes = confirm("Would you like to include symbols?")
    if (symbolsYes === true) {
      finalPassword.push(specialCharacters)
    }

    var flatPassword = finalPassword.flat()
    for (let index = 0; index < instructionsInput; index++) {

      var randomCharacter = flatPassword[Math.floor(Math.random() * flatPassword.length)];
      console.log(randomCharacter)

      generatedPassword.push(randomCharacter);

    }
  }
  return generatedPassword.join("");
}

















