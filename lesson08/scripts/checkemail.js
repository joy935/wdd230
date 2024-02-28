const email = document.querySelector('#email');

email.addEventListener('blur', checkEmail);

function checkEmail() {
    let emailValue = email.value;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
    
    if (!emailPattern.test(emailValue)) {
        email.setCustomValidity('Invalid email address');
        email.style.backgroundColor = '#fff0f3';
    } else {
        email.setCustomValidity('');
        email.style.backgroundColor = '#fff';
    }
}