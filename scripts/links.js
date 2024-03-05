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

const displayLinks = (weeks) => {
    weeks.lessons.forEach((lesson) => {
        let lessonTitle = document.createElement('h4');
        lessonTitle.textContent = `Week ${lesson.lesson}`;
        links.appendChild(lessonTitle);

        lesson.links.forEach((link, index) => {
            let linkURL = document.createElement('a');
            linkURL.textContent = link.title;
            linkURL.href = baseURL + link.url;
            links.appendChild(linkURL);
            
            // add a separator between links if it's not the last one
            if (index < lesson.links.length - 1) {
                let separator = document.createTextNode(" | ");
                links.appendChild(separator);
            }
            });
    })
};

getLinks();