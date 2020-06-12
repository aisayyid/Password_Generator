# Password_Generator

This project uses javascript to create an app that randomly generates a password from the user's input choice.

##How I Did It:

1. Lines 6-9: Created arrays needed for all possible characters included in the final password.

2. Line 13: Empty array created to push all arrays picked from the users choice from confirms.

3. Line 17: Empty array that will contain the final characters that were randomly selected from the finalPassword array to create the randomly generated password.

4. Line 34: Function created to begin collecting all the info needed, and putting the password together.

5. Line 38: Prompt to gather an input from the user on the number of characters that the password will contain.

6. Lines 42-53: Conditions of password, that make the choices of characters to include pop up only if the amount of characters is acceptable.  If the number is below 8, more than 128, or not a number, an appropriate alert pops up and the user has to start over.

7. Lines 57-74: If user inputs a number between 8-128, the following confirms pop up to ask what types of characters they would like to include in the password.

8. Line 79: Whichever options the user picks will go into an empty array which I called finalPassword.  This will throw every array that was pushed after the confirms into the finalPassword array.  To fix the issue of having multiple arrays pushed into one, the .flat method was used to make the characters pushed to finalPassword one big array.