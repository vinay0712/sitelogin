const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

function error(input, message) {
    input.classList.add('is-invalid');
    const div = input.nextElementSibling;
    div.innerText = message;
    div.classList.add('invalid-feedback');
}

function success(input) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `Must be at least ${min} characters`);
    } else if (input.value.length > max) {
        error(input, `Must be less than ${max} characters`);
    } else {
        success(input);
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (username.value.trim() === '') {
        error(username, 'Username field cannot be left blank!');
    } else {
        checkLength(username, 6, 12);
    }
    if (password.value.trim() === '') {
        error(password, 'Password cannot be left blank!');
    } else {
        checkLength(password, 6, 20);
    }
});