const url = "https://joy935.github.io/wdd230/chamber/data/members.json";

const directory = document.querySelector('#directory');

const getMembers = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        displayMembers(data.members);
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
};

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('div');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');

        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        website.textContent = `${member.website}`;

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        directory.appendChild(card);
    })
}

getMembers();