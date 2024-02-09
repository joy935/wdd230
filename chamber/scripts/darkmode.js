const darkMode = document.querySelector('.switch input[type="checkbox"]');
const body = document.querySelector('body');
const boxevent = document.querySelector('.events-box');
const contact = document.querySelector('.contact');

darkMode.addEventListener('change', () => {
    if (darkMode.checked) {
		body.classList.add('dark-style');
        boxevent.style.background = '#333333';
        contact.style.color = '#000';
	} 
    else {
        body.classList.remove('dark-style');
        boxevent.style.background = '#E9F1EE';
        contact.style.background = '#274F32';
    }
});