const raw = 'http://raw.githubusercontent.com/RobocodeSchool/web/master/halloween.json'

let HL = new XMLHttpRequest()

HL.open("GET", raw)
HL.responseType = "json"
HL.send()
HL.onload = () => {
    console.log(HL)
   let result = HL.response
   document.body.innerHTML = `

   <h1>${result.event}<h1>

   `

   let elem = document.createElement("div")
   elem.classList.add("guests")
   result.guests.forEach((guest)=>{
    elem.innerHTML += `
    <div class="guest">
    <h3>${guest.name}<h3>
    <h3>${guest.age}<h3>
    <img src="${guest.photo_url}"
    </div>
    `
   })
   document.body.appendChild(elem)
   
}
