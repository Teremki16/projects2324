const raw = 'http://raw.githubusercontent.com/RobocodeSchool/web/master/halloween.json'

const xhr = new XMLHttpRequest()

xhr.open("GET", raw)
xhr.responseType = "json"
xhr.send()
xhr.onload = ()=>{
    console.log(xhr)
    let result = xhr.response
    document.body.innerHTML = `<h1>${result.event}</h1>`
    let doc = document.createElement("div")
    doc.classList.add("gusts")
    result.guests.forEach((guest)=>{
        doc.innerHTML += `
        <div class="guest">
        <h3>${guest.name}</h3>
        <h3>${guest.age}</h3>
        <img src="${guest.photo_url}">
        </div>
        `
    })
    document.body.appendChild(doc)
}

