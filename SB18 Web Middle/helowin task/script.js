const Url = "https://raw.githubusercontent.com/RobocodeSchool/web/master/halloween.json"


let XML = new XMLHttpRequest()

XML.open("GET", "https://raw.githubusercontent.com/RobocodeSchool/web/master/halloween.json"
)
XML.responseType = "json"
XML.send()
XML.onload = ()=> {
    console.log(XML.response)
    let result = XML.response
    
    
    document.body.innerHTML = `
    <h1>${result.event}</h1>
    `
    let element = document.createElement("div")
    element.classList.add("guests")
    result.guests.forEach((guest) => {
        element.innerHTML += `
        <div class="guest">
        <h3>${guest.name}</h3>
        <h3>${guest.age}</h3>
        <img src="${guest.photo_url}">
        </div>`
    })
    document.body.appendChild(element)
    
}