const url = "https://raw.githubusercontent.com/RobocodeSchool/web/master/halloween.json"
const XHR = new XMLHttpRequest()

XHR.open("GET", url)
XHR.responseType = "json"
XHR.send()
XHR.onload = () => {
    console.log(XHR.response)
    let result = XHR.response
    document.body.innerHTML = `
    <header>${result.event}</header>
    `
    let reselem = document.createElement("div")
    reselem.classList.add("a")
    result.guests.forEach((guest)=>{
        reselem.innerHTML += `
        <div class="guest">
        <h3>${guest.name}</h3>
        <h3>${guest.age}</h3>
        <img src="${guest.photo_url}">
        </div>
        `
    })

    document.body.appendChild(reselem)


}