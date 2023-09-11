const serializer = new XMLSerializer();
const parser = new DOMParser();

let orderForm = document.getElementById("order-form");
let orderTable = document.getElementById("order-table");
let orders = [];

orderForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let order = {
        dish: event.target["dish"].value,
        time: event.target["time"].value,
        address: event.target["address"].value,
        tel: event.target["tel"].value,
    };
    orders.push(order);
    console.log(JSON.stringify(order));
    event.target.reset();
    drawOrders();
});

function drawOrders() {
    orderTable.innerHTML = `
    <tr>
        <th>Dish</th>
        <th>Time</th>
        <th>Address</th>
        <th>Telephone</th>
        <th>Link</th>
    </tr>
    `;
    orders.forEach((order) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${order.dish}</td>
        <td>${order.time}</td>
        <td>${order.address}</td>
        <td>${order.tel}</td>
        <td>${createDownloadLinkXML(order).outerHTML}</td>
        `;
        orderTable.appendChild(tr);
    });
}

function createDownloadLinkJSON(order) {
    let text = JSON.stringify(order);

    console.log(JSON.parse(text));

    let download = document.createElement("a");
    download.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    download.setAttribute("download", "order.json");
    download.innerText = "link";
    return download;
}

function createDownloadLinkXML(order) {
    let xmlElem = document.createElement("order");
    xmlElem.innerHTML = `
        <dish>${order.dish}</dish>
        <time>${order.time}</time>
        <address>${order.address}</address>
        <tel>${order.tel}</tel>
    `;
    let xmlStr = serializer.serializeToString(xmlElem);

    console.log(
        parser
            .parseFromString(xmlStr, "application/xml")
            .getElementsByTagName("order")[0]
    );

    let download = document.createElement("a");
    download.setAttribute(
        "href",
        "data:text/xml;charset=utf-8," + encodeURIComponent(xmlStr)
    );
    download.setAttribute("download", "order.xml");
    download.innerText = "link";
    return download;

}
