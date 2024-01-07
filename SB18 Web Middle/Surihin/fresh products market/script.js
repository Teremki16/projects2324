let xhr = new XMLHttpRequest()
let apiKey = "659981a27d40f277169a8d4e"
let url = "https://vovanderdatabase-9667.restdb.io/rest/products"

xhr.open("GET", url)
xhr.setRequestHeader("content-type", "application/json")
xhr.setRequestHeader("x-apikey", apiKey)
xhr.setRequestHeader("cache-control", "no-cache")
xhr.responseType = "json"
xhr.onload = () => {
    console.log(xhr.response)
    let products = xhr.response
    let prodElem = document.querySelector(".products")
    prodElem.innerHTML = ""
    products.forEach((product) => {
        let prod = document.createElement("div")
        prod.classList.add("product")
        prod.innerHTML = `
        <img src="${product.img}">
        <h2>${product.name}</h2>
        <h3>${product.price}</h3>
        <p>${product.description}</p>
        `
        prod.setAttribute("prod_ID", product.id)
        prodElem.append(prod)

    });
}
xhr.send()

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault()
    let data = {
        name: event.target["name"].value,
        img: event.target["img"].value,
        price: event.target["price"].value,
        description: event.target["description"].value,
        author_id: 1
    }

    let xhrA = new XMLHttpRequest();
    xhrA.withCredentials = false;

    xhrA.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhrA.open("POST", "https://vovanderdatabase-9667.restdb.io/rest/products");
    xhrA.setRequestHeader("content-type", "application/json");
    xhrA.setRequestHeader("x-apikey", apiKey);
    xhrA.setRequestHeader("cache-control", "no-cache");

    xhrA.send(JSON.stringify(data));
})