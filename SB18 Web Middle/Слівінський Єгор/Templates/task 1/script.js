const header = document.querySelector("header")
const section = document.querySelector("section")

const xhr = new XMLHttpRequest()

const URL = `https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json`

xhr.open("GET", URL)

xhr.send()

xhr.onload = function(){
    let res = JSON.parse(xhr.response)
    console.log(res)
    headeDraw(res)
    sectionDraw(res)
}

const headeDraw = (obj) => {
    const H1 = document.createElement("h1")
    H1.textContent = obj.squadName
    header.appendChild(H1)

    const p = document.createElement("p")
    p.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`
    header.append(p)
}

const sectionDraw = (obj) => {
    let members = obj.members
    members.forEach(member => {
        let myArticle = document.createElement("article")
        let h2 = document.createElement("h2")
        let p1 = document.createElement("p")
        let p2 = document.createElement("p")
        let p3 = document.createElement("p")
        let ul = document.createElement("ul")
        h2.textContent = member.name
        p1.textContent = `Secret identity: ${member.secretIdentity}`
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
    })
}