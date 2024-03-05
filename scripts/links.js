const baseURL = "https://joy935.github.io/wdd230/";
const linksURL =  "https://joy935.github.io/wdd230/data/links.json";

const links = document.querySelector('#links');

const getLinks = async () => {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        // console.log(data.lessons[0].lesson);
        displayLinks(data);
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
};

const displayLinks = (data) => {
    data.lessons.forEach((lesson) => {
        let lessonTitle = document.createElement('h4');
        lessonTitle.textContent = `Week ${lesson.lesson}`;
        links.appendChild(lessonTitle);

        lesson.links.forEach((link) => {
            let linkTitle = document.createElement('a');
            let linkURL = document.createElement('p');

            linkTitle.textContent = link.title;
            linkTitle.href = baseURL + link.url;
            linkTitle.target = "_blank";

            links.appendChild(linkTitle);
            links.appendChild(linkURL);
        });
    });
};

getLinks();