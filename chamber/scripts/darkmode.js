const darkMode = document.querySelector('.switch input[type="checkbox"]');
const body = document.querySelector('body');
const boxevent = document.querySelector('.events-box');
const contacts = document.querySelectorAll('.contact');
const memberships = document.querySelectorAll('.memberships');

console.log(memberships)

darkMode.addEventListener('change', () => {
    if (darkMode.checked) {
		body.classList.add('dark-style');
        memberships.forEach(membership => {
            membership.style.backgroundColor = '#333333';
        });
        boxevent.style.background = '#333333';
        contacts.forEach(contact => {
            contact.style.color = 'white';
        });
    }
    else {
        body.classList.remove('dark-style');
        memberships.forEach(membership => {
            membership.style.backgroundColor = '#E9F1EE';
        });
        boxevent.style.background = '#E9F1EE';
        contacts.forEach(contact => {
            contact.style.color = '#274F32';
        });
    }
});