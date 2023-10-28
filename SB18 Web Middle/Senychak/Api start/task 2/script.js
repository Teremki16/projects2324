const xhr = new XMLHttpRequest();
const URL = `https://raw.githubusercontent.com/RobocodeSchool/web/master/historycats.json`;

xhr.open("GET", URL);
xhr.responseType = "json";
xhr.send();
xhr.onload = () => {
    let section = document.querySelector("section");
    section.innerHTML = "";
    xhr.response.forEach((i) => {
        section.innerHTML += `
            <article>
                <h2>${i.name}</h2>
                <img src="${i.img}">
                <p>${i.description}</p>
            </article>
        `;
    });
};
