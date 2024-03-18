const pleinfeux = document.querySelector('.plein-feux');

const url = "https://joy935.github.io/wdd230/chamber/data/members.json";

const getSpotlight = async () => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json()
            // console.log(data)
            displaySpotlight(data.members)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching data: ", error)
    }
};

const displaySpotlight = (members) => {
    members.forEach((member) => {
        let spotlightCard = document.createElement('section');
        spotlightCard.classList.add('spotlight-card');  // add a class to the card
        let image = document.createElement('img');
        image.classList.add('card-img'); // add a class to the image
        let name = document.createElement('h3');
        let email = document.createElement('p');
        email.classList.add('contact'); // add a class to the email
        let phone = document.createElement('p');
        phone.classList.add('contact'); // add a class to the phone
        let website = document.createElement('a');
        website.classList.add('contact'); // add a class to the website

        if (member.membership === "gold" || member.membership == "silver") {
            image.setAttribute('src', member.image);
            image.setAttribute('alt', `Logo of ${member.name}`);
            image.setAttribute('loading', 'lazy');
            image.setAttribute('width', '300');
            image.setAttribute('height', 'auto');
            name.textContent = `${member.name}`;
            email.textContent = `${member.email}`;
            phone.textContent = `${member.phone}`;
            website.href = `${member.website}`;
            website.textContent = `${member.website}`;

            spotlightCard.appendChild(image);
            spotlightCard.appendChild(name);
            spotlightCard.appendChild(email);
            spotlightCard.appendChild(phone);
            spotlightCard.appendChild(website);

            pleinfeux.appendChild(spotlightCard);
        }

    });
};

getSpotlight();