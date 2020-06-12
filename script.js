
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["~", "`", "!", "#", "$", "%", "^", "&", "*", "+", "=", "-", "[", "]", ";", ",", "/", "{", "}", "|", ":", "<", ">", "?"];
var finalPassword = []
var generatedPassword = []



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);



function generatePassword() {



  var instructionsInput = prompt("How many characters would you like to have in your password (needs to be between 8 and 100 characters)?")



  if (instructionsInput < 8) {

    alert("The password cannot be less than 8 characters.")

  } else if (instructionsInput > 100) {

    alert("The password cannot be more than 100 characters.")

  } else if (isNaN(instructionsInput)) {

    alert("Character is not a number.")
  }

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

















