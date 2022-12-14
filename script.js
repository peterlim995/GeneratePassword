// Assignment Code
var generateBtn = document.querySelector("#generate");

// Input the condition and generate the password
function generate(x) {
  var chars = "";
  var password = "";

  // if it includes lowercase
  if (x.lowercase) {
    chars += "abcdefghijklmnopqrstuvwxyz";
  }

  // if it includes uppercase
  if (x.uppercase) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  // if it includes number
  if (x.numeric) {
    chars += "1234567890";
  }

  // if it includes special character
  if (x.special) {
    chars += "~!@#$%^&*()][-=?/;:";
  }

  // generate the selected length of password
  for (var i = 0; i < x.lengthNum; i++) {
    var random = Math.floor(Math.random() * chars.length);
    password += chars.substring(random, random + 1);
  }

  return password;

}

// User choose the condition of password and return the password
function generatePassword() {

  var lengthNum;
  var lowercase;
  var uppercase;
  var numeric;
  var special;

  // ask the length of the password
  // it must be number and not be no data
  do {
    lengthNum = prompt("Enter the length of the password. \nIt must be at least 8 characters and no more than 128 characters");
    if (lengthNum == null) {
      return null;
    } else if (isNaN(lengthNum)) {
      alert("You must enter the number");
    } else if (lengthNum < 8 || lengthNum >= 128) {
      alert("It must be at least 8 characters and no more than 128 characters");
    } else {
      break;
    }
  } while (true)

  // confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  // At least one character type should be selected
  do {
    lowercase = confirm("Do you want to include lowercase characters?");
    uppercase = confirm("Do you want to include uppercase characters?");
    numeric = confirm("Do you want to include numeric characters?");
    special = confirm("Do you want to include special characters?");

    if (!lowercase && !uppercase && !numeric && !special) {
      alert("At least one character type should be selected");
    } else {
      break;
    }
  } while (true)

  var password = {
    lengthNum: lengthNum,
    lowercase: lowercase,
    uppercase: uppercase,
    numeric: numeric,
    special: special
  }

  return generate(password);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


