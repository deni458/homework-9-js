function checkIfDigit(char) {
    if (char === '1' || char === '2' || char === '3' || char === '4' || char === '5' || char === '6' || char === '7' || char === '8' || char === '9' || char === '0') {
        return true;
    } else {
        return false;
    }
}

function validateName(name) {
    for (let i = 0; i < name.length; i++) {
        if (checkIfDigit(name.charAt(i))) {
            return false;
        }
    }
    return true;
}

function submit() {

    let validation = false;

    // Name
    const htmlElementName = document.getElementById('name');
    const valueName = htmlElementName.value;

    if (valueName === '') {
        alert('The field for name can not be empty!');
        return;
    }

    if (valueName.length < 3) {
        alert('The name must be at least 3 leters!');
        return;
    }

    if (validateName(valueName) === false) {
        alert('The name has digits in it!');
        return;
    }
    // Email
    const htmlElementEmail = document.getElementById('email');
    const valueEmail = htmlElementEmail.value;

    if (valueEmail.length < 6) {
        alert("The email must have at least 6 characters!");
        return;
    }

    if (valueEmail.indexOf('@') === -1) {
        alert("The email must have '@' in it!");
        return;
    }

    if (valueEmail.indexOf('.') === -1) {
        alert("The email must have '  .  ' in it!")
        return;
    }

    // Email again(2)
    const htmlElementEmail_2 = document.getElementById('email-2');
    const valueEmail_2 = htmlElementEmail_2.value;

    if (valueEmail_2 === '') {
        alert('Please fill in the empty field for email again!');
        return;
    }

    if (valueEmail_2 !== valueEmail) {
        alert("Wrong email, please type the same email as above!")
        return;
    }

    // Password
    const htmlElementPassword = document.getElementById('password');
    const valuePassword = htmlElementPassword.value;

    if (valuePassword.length < 6) {
        alert('The password must be at least 6 characters!');
        return;
    }

    //Password again(2)
    const htmlElementPassword_2 = document.getElementById('password-2');
    const valuePassword_2 = htmlElementPassword_2.value;

    if (valuePassword_2 === '') {
        alert('Please fill in the empty fileld for password again!');
        return;
    }

    if (valuePassword_2 !== valuePassword) {
        alert('Wrong password, please type the same password as above!')
        return;
    } else {
        validation = true;
    }

    //Validation
    if (validation) {
        console.log('Name: ' + valueName);
        console.log('Email: ' + valueEmail);
        console.log('Password: ' + valuePassword);
        console.log('Successfully registered!');
    }
}