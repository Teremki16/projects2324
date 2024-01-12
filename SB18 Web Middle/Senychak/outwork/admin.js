document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let data = {
        name: e.target["name"].value,
        img: e.target["img"].value,
        price: e.target["price"].value,
        description: e.target["description"].value,
        author_id: e.target["author_id"].value,
    };
    console.log(data);
    e.target.reset();

    let xhr = new XMLHttpRequest();
    let API_key = "65a02518514c4d0861bd4dec";

    xhr.open("POST", "https://roboshop-4fe1.restdb.io/rest/products");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", API_key);
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(JSON.stringify(data));
});
