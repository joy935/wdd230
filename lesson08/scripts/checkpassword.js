const password1 = document.querySelector('#password');
console.log(password1);
const password2 = document.querySelector('#password2');
console.log(password2);

const errorMessage = document.createElement('p');
errorMessage.textContent = 'Passwords do not match!';
errorMessage.style.color = 'red';
errorMessage.style.fontWeight = 'bold';
errorMessage.style.display = 'none';
password2.parentElement.appendChild(errorMessage);

password2.addEventListener('focusout', checkPassword);

function checkPassword() {
    if (password1.value !== password2.value) {
        /* add error message */
        errorMessage.style.display = 'block';
        password2.style.backgroundColor = '#fff0f3';
        password2.value = '';
        password2.focus();
    } else {
        message.style.display = 'none';
        password2.style.backgroundColor = '#fff';
    }
}