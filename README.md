# Password_Generator

This project uses javascript to create an app that randomly generates a password from the user's input choice.

## How I Did It:

- Lines 6-9:  Created arrays needed for all possible characters included in the final password.

- Line 13:  Empty array created to push all arrays picked from the users choice from confirms.

- Line 17:  Empty array that will contain the final characters that were randomly selected from the finalPassword array to create the randomly generated password.

- Line 34:  Function created to begin collecting all the info needed, and putting the password together.

- Line 38:  Prompt to gather an input from the user on the number of characters that the password will contain.

-  Lines 42-53:  Conditions of password, that make the choices of characters to include pop up only if the amount of characters is acceptable.  If the number is below 8, more than 128, or not a number, an appropriate alert pops up and the user has to start over.

-  Lines 57-74:  If user inputs a number between 8-128, the following confirms pop up to ask what types of characters they would like to include in the password.

-  Line 79:  Whichever options the user picks will go into an empty array which I called finalPassword.  This will throw every array that was pushed after the confirms into the finalPassword array.  To fix the issue of having multiple arrays pushed into one, the .flat method was used to make the characters pushed to finalPassword one big array. I then renamed finalPassword to flatPassord to reflect the change.

-  Lines 84-87:  Created a for loop, with a Math.random method to pick a character at random from the full length of the users choice of password length through the flatPassword array.  The random method was then re-assigned to a variable which I name randomCharacter.

-  Line 91:  The random characters are then pushed to the empty array generatedPassword, which contains the final result.

-  Line 98:  Returns the generated password to the screen.  Had to use .join method to get rid of commas resulting from the array, which results in a cleanly generated password with the correct amount of characters.
 
   https://aisayyid.github.io/Password_Generator/
