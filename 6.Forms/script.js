// Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.
const firstInputField = document.querySelector("#firstname");
const displayFirstnameSpan = document.querySelector("#display-firstname");

firstInputField.addEventListener("keyup", event => {
    const inputFieldValue = event.target.value;
    displayFirstnameSpan.textContent = inputFieldValue;
})

// Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.
const secondInputField = document.querySelector("#age");
const aHardTruthSection = document.querySelector("#a-hard-truth");

secondInputField.addEventListener("input", event => {
    const enteredAge = event.target.value;
    console.log(enteredAge);
    if (enteredAge >= "18") {
        aHardTruthSection.style.visibility = "visible";
    } else {
        aHardTruthSection.style.visibility = "hidden";
    }
})

// Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance turn the field red) if the password is too short (less than 6 characters) or if the password and its confirmation do not match.
const passwordInputField = document.querySelector("#pwd");

passwordInputField.addEventListener("input", event => {
    enteredPassword = event.target.value;
    if (enteredPassword.length < 6) {
        passwordInputField.style.outline = "2px solid red";
    } else {
        passwordInputField.style.outline = "initial";
    }
})

const passwordConfirmInputField = document.querySelector("#pwd-confirm");

passwordConfirmInputField.addEventListener("input", event => {
    const enteredPassword = passwordInputField.value;
    const enteredPasswordConfirmation = event.target.value;
    console.log(passwordInputField.value);
    console.log(enteredPasswordConfirmation);
    if (enteredPassword !== enteredPasswordConfirmation) {
        passwordConfirmInputField.style.outline = "2px solid red";
    } else {
        passwordConfirmInputField.style.outline = "initial";
    }
})

// Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white.
const modeSelector = document.querySelector("#toggle-darkmode");

modeSelector.addEventListener("change", event => {
    console.log(event);
    const selectedMode = event.target.value;
    if (selectedMode === "dark") {
        document.body.style.background = "black";
        document.body.style.color = "white";
    } else {
        document.body.style.background = "white";
        document.body.style.color = "black";
    }
})