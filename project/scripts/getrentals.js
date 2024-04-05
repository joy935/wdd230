const urlrentals = "https://joy935.github.io/wdd230/project/data/rentals.json";

const rentals = document.querySelector('#rentals');

const getRentals = async () => {
    try {
        const response = await fetch(urlrentals);
        const data = await response.json();
        displayRentals(data.rentals);
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}

const displayRentals = (rentals) => {
    rentals.forEach((rental) => {
        let card = document.createElement('section');
        let image = document.createElement('img');
        let rentalType = document.createElement('h3');
        // let numberPerson = document.createElement('p');

        card.setAttribute('max-width', '300px');

        image.setAttribute('src', rental.image);
        image.setAttribute('alt', `Logo of ${rental.rentaltype}`);
        image.setAttribute('width', '300');
        image.setAttribute('height', 'auto');
        image.setAttribute('target', '_blank');
        console.log(rental.rentaltype);
        rentalType.textContent = `${rental.rentaltype}`;
        // numberPerson.textContent = `${rental.numberPerson}`;

        card.appendChild(image);
        // card.appendChild(rentalType);
        // card.appendChild(numberPerson);

        rentals.appendChild(card);
    })
}

getRentals();