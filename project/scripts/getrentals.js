const urlrentals = "https://joy935.github.io/wdd230/project/data/rentals.json";

const rentalsInfo = document.querySelector('#rentals');

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
        let numberPerson = document.createElement('p');
        let milleage = document.createElement('p');
        let insurance = document.createElement('p');
        let pricehalfday = document.createElement('p');
        let pricefullday = document.createElement('p');

        card.setAttribute('max-width', '300px');

        image.setAttribute('src', rental.image);
        image.setAttribute('alt', `Logo of ${rental.rentaltype}`);
        image.setAttribute('width', '300');
        image.setAttribute('height', 'auto');
        image.setAttribute('target', '_blank');
        rentalType.textContent = `${rental.rentaltype}`;
        if (rental.numberperson > 1) {
            numberPerson.textContent = `${rental.numberperson} persons`;
        } else {
            numberPerson.textContent = `${rental.numberperson} person`;
        }
        milleage.textContent = `Unlimited milleage`;
        insurance.textContent = `Damage insurance included`;
        pricehalfday.textContent = `Half Day: ${rental.walkin.halfday}`;
        pricehalfday.classList.add('pricehd');
        pricefullday.textContent = `Full Day: ${rental.walkin.fullday}`;
        pricefullday.classList.add('pricefd');

        card.appendChild(image);
        card.appendChild(rentalType);
        card.appendChild(numberPerson);
        card.appendChild(milleage);
        card.appendChild(insurance);
        card.appendChild(pricehalfday);
        card.appendChild(pricefullday);

        rentalsInfo.appendChild(card);
    })
}

getRentals();