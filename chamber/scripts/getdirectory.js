const url = "https://joy935.github.io/wdd230/chamber/data/members.json";

const members = document.querySelector('#members');

const getMembers = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        // displayMembers(data);
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
};

getMembers();