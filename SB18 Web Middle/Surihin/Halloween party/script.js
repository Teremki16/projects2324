const url = "https://raw.githubusercontent.com/RobocodeSchool/web/master/halloween.json"

const xhr = new XMLHttpRequest()
xhr.open("GET", url)
xhr.responseType = "json"
xhr.send()
xhr.onload = () => {
    console.log(xhr.response)

    let result = xhr.response

    document.body.innerHTML =
        `<h1>${result.event}</h1>`

    let reselem = document.createElement("div")
    
    result.guests.forEach((guest) => {
        reselem.innerHTML += `
        <div class="guest">
        <h3>${guest.name}</h3>
        <h3>${guest.age}</h3>
        <img src="${guest.photo_url}">
        </div>`
    })
    document.body.appendChild(reselem)
}
