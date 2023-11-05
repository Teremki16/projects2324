const halloweenurl = "https://raw.githubusercontent.com/RobocodeSchool/web/master/halloween.json"

const halloweenXHR = new XMLHttpRequest()
halloweenXHR.open("GET", halloweenurl)
halloweenXHR.responseType = "json"
halloweenXHR.send()
halloweenXHR.onload = ()=>{
    console.log(halloweenXHR.response)
    let result = halloweenXHR.response
    document.body.innerHTML = `
    <header>${result.event}</header>
    `
   let element = document.createElement("div")
   element.classList.add("container")
   result.guests.forEach((guest)=>{
    element.innerHTML+= `
    <div class = "guset">
    <h3>${guest.name}</h3>
    <h3>${guest.age}</h3>
    <img src= "${guest.photo_url}">
    `
   })
   document.body.appendChild(element)

}


