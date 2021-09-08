// Assignment Code
var generateBtn = document.querySelector("#generate");
var caseSelection;
var numberSelection;
var specialSelection;
var charCount;

function generatePassword() {

    //Asking how many characters the user wants
    var charCount = window.prompt("How long would you like the password to be? (Must be between 8 to 128 characters)");

    
    if (charCount === null) {
        window.alert("Canceling generation! Goodbye!");
        return;
    }
    else if (charCount < 8 || charCount > 128) {
        window.alert("Please choose between 8 to 128 characters!");
        return generatePassword();
        
    } 
    else if (isNaN(charCount)) {
        window.alert("Please Enter a number!");
        return generatePassword();
    } 
    else {
        //console log
        console.log("User wants a password with " + charCount + " characters.");
    }
    //Asking if user wants lowercase and/or uppercase
    var lowercaseSelection = window.confirm("Would you like lowercase letters in your password?");
    var uppercaseSelection = window.confirm("Would you like uppercase letters in your password?");

    if (lowercaseSelection && uppercaseSelection) {
        caseSelection = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } 
    else if (lowercaseSelection && uppercaseSelection === false){
        caseSelection = "abcdefghijklmnopqrstuvwxyz";
    }
     else if (lowercaseSelection === false && uppercaseSelection) {
        caseSelection = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } 
    else {
        caseSelection = "";
    }
    //Logging answer in console
    console.log(caseSelection);


    //Asking if user wants numbers in the password
    var numSelection = window.confirm("Would you like numbers in your password?");

    if(numSelection) {
        numberSelection = "1234567890";
    }else{
        numberSelection = "";
    }
     //Logging answer in console
    console.log(numberSelection);

    //Asking if user wants special characters in the password
    var specSelection = window.confirm("Would you like special characters in your password?");

    if(specSelection) {
        specialSelection = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    } else {
        specialSelection = "";
    }


    //set variables to randomize password with data recieved
    var length = charCount,
    randomize = caseSelection + numberSelection + specialSelection,
    password = "";
    for (var i = 0, n = randomize.length; i < length; ++i) {
        password += randomize.charAt(Math.floor(Math.random() * n));
    }
    return password;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

