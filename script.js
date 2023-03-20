const userPassword = document.querySelector('user_password');
const confirmPassword = document.querySelector('confirm_password');

function checkPassword (userPassword, confirmPassword) {
    if (userPassword === confirmPassword) {
        return true;
    }
}

// if pass === pass {
//     text says ...
//     update html
// }