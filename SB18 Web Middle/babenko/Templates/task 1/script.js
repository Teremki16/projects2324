const header = document.querySelector("header")
const section = document.querySelector("section")
const URL = `https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json`

const xhr =  new XMLHttpRequest()

xhr.open("GET", URL)
xhr.send()
xhr.onload = function(){
    let res = JSON.parse(xhr.response)
    console.log(res)
    headerDraw(res)
    sectionDraw(res)

}

const headerDraw = (object) =>{
    const h1 = document.createElement("h1")
    h1.textContent = object.squadName
    header.appendChild(h1)

    const p = document.createElement("p")
    p.textContent = `Hometown:${object.homeTown}// Formed: ${object.formed}`
    header.appendChild(p)

}

const sectionDraw = (object) =>{
 let members = object.members
  members.forEach(member => {
    let myArticle = document.createElement("article")
    let h2 = document.createElement("h2")
    let p1= document.createElement("p")
    let p2= document.createElement("p")
    let p3= document.createElement("p")
    let ul= document.createElement("ul")
    h2.textContent = member.name
    p1.textContent = `Secret identity: ${member.secretIidentity}`
    p2.textContent = `Age: ${member.age}`
    p3.textContent = `Superpowers:`
    member.powers.forEach((power)=>{
        let item = document.createElement("li")
        item.textContent = power
        ul.appendChild(item)
    })
    myArticle.appendChild(h2)
    myArticle.appendChild(p1)
    myArticle.appendChild(p2)
    myArticle.appendChild(p3)
    myArticle.appendChild(ul)
    section.appendChild(myArticle)
 });
}