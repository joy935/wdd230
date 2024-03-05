const baseURL = "https://joy935.github.io/wdd230/";
const linksURL =  "https://joy935.github.io/wdd230/data/links.json";

const links = document.querySelector('#links');

let linkList = [];

const getLinks = async () => {
    try {
        const response = await fetch(linksURL);
        linkList = await response.json();
        console.table(linkList);
        // displayLinks(linkList);
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
};

getLinks();