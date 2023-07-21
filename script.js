// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var newPassword = "";
  var newCharacter = "";
  var possibleCharacters = "";
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "123456789";
  var specialCharacters = "/^[!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?]*$/";
  
  var passwordLength = prompt("What is the desired length of your password (accepted values lie between 7 and 129 characters)");
  while (passwordLength<8 || passwordLength >128) {
    invalidResponse = prompt("Sorry, please choose a number that fits the given range: (accepted values lie between 7 and 129 characters)")
    passwordLength = invalidResponse;
  }

  var yesOrNo = prompt("Would you like to include lowercase letters in your password?");
  while (yesOrNo.toLowerCase() != "yes" && yesOrNo.toLowerCase() != "no") {
    yesOrNo = prompt("Please answer yes or no.");
  }
  if (yesOrNo.toLowerCase() == "yes" )
  {
    possibleCharacters += lowerCaseLetters;
  }
  
  var yesOrNo = prompt("Would you like to include uppercase letters in your password?");
  while (yesOrNo.toLowerCase() != "yes" && yesOrNo.toLowerCase() != "no") {
    yesOrNo = prompt("Please answer yes or no.");
  }
  if (yesOrNo.toLowerCase() == "yes" )
  {
    possibleCharacters += upperCaseLetters;
  }

  var yesOrNo = prompt("Would you like to include numbers in your password?");
  while (yesOrNo.toLowerCase() != "yes" && yesOrNo.toLowerCase() != "no") {
    yesOrNo = prompt("Please answer yes or no.");
  }
  if (yesOrNo.toLowerCase() == "yes" )
  {
    possibleCharacters += numbers;
  }
  
  var yesOrNo = prompt("How about special characters?");
  while (yesOrNo.toLowerCase() != "yes" && yesOrNo.toLowerCase() != "no") {
    yesOrNo = prompt("Please answer yes or no.");
  }
  if (yesOrNo.toLowerCase() == "yes" )
  {
    possibleCharacters += specialCharacters;
  }

  if (possibleCharacters.length === 0) {
    var oneThroughFour = prompt("You did not choose at lease one of the four criteria. Choose a number one through four to include one criteria for your password. 1: lower case letters, 2: upper case lettes, 3: numbers, 4: special characters.");
    while (oneThroughFour != 1 && oneThroughFour != 2 && oneThroughFour != 3 && oneThroughFour != 4)
    {
      oneThroughFour = prompt("Please choose a number one through four to continue.");
    }
    if (oneThroughFour == 1 ) {
      possibleCharacters += lowerCaseLetters;
    }
    if (oneThroughFour == 2 ) {
      possibleCharacters += upperCaseLetters;
    }
    if (oneThroughFour == 3 ) {
      possibleCharacters += numbers;
    }
    if (oneThroughFour == 4 ) {
      possibleCharacters += specialCharacters;
    }
  }

  for (var i = 0; i<passwordLength; i++) {
    var randomValue;
    var sliceRange = possibleCharacters.length;
    //if (yesOrNo == "yes") {
      //randomValue = Math.floor(Math.random() * possibleCharacters.length); 
    //}
    //else {
      //randomValue = Math.floor(Math.random() * possibleCharacters.length); 
    //}
    randomValue = Math.floor(Math.random() * sliceRange); 
    var newCharacter = possibleCharacters.slice(randomValue - 1, randomValue);
    newPassword += newCharacter;
  }
  return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
