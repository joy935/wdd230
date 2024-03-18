const pleinfeux = document.querySelector('.plein-feux');

const url = "https://joy935.github.io/wdd230/chamber/data/members.json";

const getSpotlight = async () => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json()
            displaySpotlight(data.members)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching data: ", error)
    }
};

const randomSpotlight = (members) => {
    let randomMember = members[Math.floor(Math.random() * members.length)];
    return randomMember;
}

const displaySpotlight = (members) => {
    // filter the members array to only include gold and silver members
    let randomMembers = members.filter(member => 
        member.membership === "gold" || member.membership === "silver"); 
    
    randomMembers.sort(() => Math.random() - 0.5); // shuffle the array
    let spotlightMembers = randomMembers.slice(0, 3); // get the first 3 members in the shuffled array
    
    spotlightMembers.forEach((member) => {
        let spotlightCard = document.createElement('section');
        spotlightCard.classList.add('spotlight-card');  // add a class to the card
        let picture = document.createElement('picture');
        let sourcePic = document.createElement('source');
        sourcePic.setAttribute('srcset', member.image);
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