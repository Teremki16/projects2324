const startUrl = "https://pokeapi.co/api/v2/pokemon?/limit=20&offset=1000"
const startXHR = new XMLHttpRequest()

const resultElement = document.getElementById("result")
const navPanel = document.querySelector("nav")
const selectElem = document.querySelector('select')

let state
let limit = 20

const pokemonListRequest = (url) => {
    startXHR.open("GET", url)
    startXHR.responseType = "json"
    startXHR.send()
    startXHR.onload = () => {
        state = startXHR.response
        drawList()
        document.getElementById("prev").disable = !state.previous
        document.getElementById("next ").disable = !state.next
    }
}

pokemonListRequest(startUrl)

const drawList = () => {
    let pokemonElement = document.createElement("ul")
    pokemonElement.classList.add("pokemon-list")
    state.results.forEach((pokemon) => {
        pokemonElement.innerHTML += `<li onclick="searching('${pokemon.url}')">${pokemon.name}</li>`
    })
    resultElement.innerHTML = null
    resultElement.appendChild(pokemonElement)
    showBtns
}

function searching(pokemonName) {
    let xhr = new XMLHttpRequest
    xhr.open("GET", pokemonName)
    xhr.responseType = "json"
    xhr.send()
    xhr.onload = () => {
        if (xhr.status > 200) {
            resultElement.innerHTML = "<div class='pokemon'>pokemon is not defined</div>"
        } else {
            drawPokemon(xhr.response)
        }
    }
    xhr.onerror = (err) => {
        console.error(err)
        resultElement.innerHTML = "<div class = 'pokemon' it was error while request. try again.</div>"
    }
}

function drawPokemon(obj) {
    hideBtns()
    resultElement.innerHTML = ""
    let pokeElement = document.createElement("div")
    pokeElement.classList.add("pokemon")
    pokeElement.innerHTML = `
    <button class="btn" onclick="drawList()"GO BACK</button>
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
    resultElement.appendChild(pokeElement)
}

const next = () => pokemonListRequest(state.next)
const prev = () => pokemonListRequest(state.previous)

document.getElementById("limit").addEventListener("change", (event) => {
    limit = event.target.value
    pokemonListRequest(`https://pokeapi.co/api/v2/pokemon?/limit=${limit}&offset=0`)
})

const hideBtns = () => {
    navPanel.style = "dislay: none"
    selectElem.style = "dislay: none"
}

const showBtns = () => {
    navPanel.style = "dislay: flex"
    selectElem.style = "dislay: block"
}

