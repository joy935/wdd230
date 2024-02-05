const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// create an event listener for the button
button.addEventListener('click', () => {

    // check if the input value is not empty
    if (input.value != '') {

        // create a new list item and a delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        
        // add the input value to the list item and the delete 
        // button to the list item
        li.textContent = input.value;
        deleteButton.textContent = '❌';        
        li.appendChild(deleteButton);
        list.appendChild(li);
        input.value = ''; // clear the input value (for convenience)

        // add an event listener for the delete button
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
            input.value = '';
        });
    }
    });

// add an event listener for the input to allow the user to 
// press the enter key to add a new list item 
input.addEventListener('keyup', (e) => {
    if (e.code === 'Enter') {
        button.click();
    }
});

// prevent duplicate list items
input.addEventListener('input', () => {
    const chapters = list.querySelectorAll('li');
    let isDuplicate = false;

    chapters.forEach(chapter => {
        if (input.value.toLowerCase() === chapter.textContent.toLowerCase()) {
            isDuplicate = true;
        }
    });

    if (isDuplicate) {
        button.disabled = true;
        input.classList.add('error');
    }
    else {
        button.disabled = false;
        input.classList.remove('error');
    }
});