const darkMode = document.querySelector('.switch input[type="checkbox"]');
const body = document.querySelector('body');
const boxevent = document.querySelector('.events-box');

darkMode.addEventListener('change', () => {
    if (darkMode.checked) {
		body.classList.add('dark-style');
        boxevent.style.background = '#333333';
	} 
    else {
        body.classList.remove('dark-style');
        boxevent.style.background = '#OB261A';
    }
});