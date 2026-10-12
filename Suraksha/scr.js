
const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('sinInForm');
const signUpForm = document.getElementById('signUpForm');

if (signUpButton) {
    signUpButton.addEventListener('click', function () {
        signInForm.style.display = 'none';
        signUpForm.style.display = 'block';
    });
}

if (signInButton) {
    signInButton.addEventListener('click', function () {
        signInForm.style.display = 'block';
        signUpForm.style.display = 'none';
    });
}

// Redirect after submitting the login form
const loginForm = document.getElementById('ContactForm');

if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        window.location.href = 'home.html';
    });
}
