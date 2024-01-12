let xhr = new XMLHttpRequest();
let API_key = "65a02518514c4d0861bd4dec";

xhr.open("GET", "https://roboshop-4fe1.restdb.io/rest/products");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("x-apikey", API_key);
xhr.setRequestHeader("cache-control", "no-cache");

xhr.responseType = "json";

xhr.onload = () => {
    let result = xhr.response;
    let products_element = document.querySelector(".products")
    result.forEach((product) => {
        let product_element = document.createElement("div")
        product_element.classList.add("product")
        product_element.innerHTML = `
            <img src="${product.img}" alt="image">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>${product.price} грн.</p>
        `
        product_element.setAttribute("id", product._id)
        products_element.append(product_element)
    });
};

xhr.send();
