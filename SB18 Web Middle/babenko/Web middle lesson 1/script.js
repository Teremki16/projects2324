const serializer = new XMLSerializer()
const parser = new DOMParser();

let orderForm = document.getElementById("order-form")
let ordertable = document.getElementById("ordertable")
let orders = []

orderForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let order = {
        dish: event.target["dish"].value,
        time: event.target["time"].value,
        address: event.target["address"].value,
        tel: event.target["tel"].value,
    }
    orders.push(order)
    console.log(JSON.stringify(order))
    event.target.reset()
    drawOrders()
})

function drawOrders() {
    ordertable.innerHTML = `
        <tr>
            <th>Dish</th>
            <th>time</th>
            <th>address</th>
            <th>telephone</th>
            <th>link</th>
        </tr>
`;
    orders.forEach(order => {
        let tr = document.createElement("tr")
        tr.innerHTML = `
<td>${order.dish}</td>
<td>${order.time}</td>
<td>${order.address}</td>
<td>${order.tell}</td>
<td>${createDownloadLinkJSON(order).outerHTML}</td>
`;
        ordertable.appendChild(tr);
    })
}

function createDownloadLinkJSON(order) {
    let text = JSON.stringify(order)

    console.log(JSON.parse(text))

    let download = document.createElement("a")
    download.setAttribute("href", `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`)
    download.setAttribute("download", "order.json")
    download.innerHTML = "link"
    return download
}
function createDownloadlinkXML(order) {
    let xmlElem = docment.createElement("order")
    xmlElem.innerHTML = `
    <dish>${order.dish}</dish>
    <time>${order.time}</time>
    <address>${order.address}</address>
    <tel>${order.tel}</tel>
    `;


    let xmlStr = serializer.serializeToString(xmlElem)
    console.log(parser.parseFromString(xmlStr, "application/xml").getElementsByTagName("order")[0]);
    
    
}
