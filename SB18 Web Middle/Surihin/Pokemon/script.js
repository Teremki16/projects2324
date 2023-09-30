const url = `https://pokeapi.co/api/v2/pokemon/`;
const search = document.querySelector("#submit")
const searchinput = document.querySelector("#search")
const mainElement = document.querySelector("main")

search.addEventListener("click", () => {
    searching(searchinput.value.toLowerCase())
})

function searching(pokemonName) {
    let xhr = new XMLHttpRequest
    xhr.open("GET", url + pokemonName)
    xhr.responseType = "json"
    xhr.send()
    xhr.onload = () => {
        if (xhr.status > 200) {
            mainElement.innerHTML = "<div class='pokemon'>pokemon is not defined</div>"
        } else {
            drawPokemon(xhr.response)
        }
    }
    xhr.onerror = (err) => {
        console.error(err)
        mainElement.innerHTML = "<div class = 'pokemon' it was error while request. try again.</div>"
    }
}

function drawPokemon(obj) {
    mainElement.innerHTML = ""
    let pokeElement = document.createElement("div")
    pokeElement.classList.add("pokemon")
    pokeElement.innerHTML = `
    <p>ID: ${obj.id}</p>
    <hr></hr>
    <h1>${obj.name}</h1>
    <img src="${obj.sprites.front_default}">
    `
    let ul = document.createElement("ul")
    obj.types.forEach((el) => {
        let li = document.createElement("li")
        li.textContent = el.type.name
        ul.appendChild(li)
    })
    pokeElement.appendChild(ul)

    let itemsElem = document.createElement("div")
    obj.held_items.forEach((el) => {
        let x = new XMLHttpRequest()
        x.open("GET", el.item.url)
        x.responceType = "json"
        x.send()
        x.onload = () => {
            let element = document.createElement("div")
            let res = x.response
            element.innerHTML = `
            <h4>${res.name}</h4>
            <img src = "${res.sprites.default}">
            <p>Cost: ${res.cost}</p>
            `
            itemsElem.appendChild(element)
        }
    })
    mainElement.appendChild(pokeElement)
}