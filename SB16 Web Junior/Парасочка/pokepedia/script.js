const startUrl = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=1000"
const startXHR = new XMLHttpRequest()

const resultElement = document.querySelector("#result")
let state;
console.log(resultElement)


const pokemonListRequest = (url) => {
    startXHR.open("GET", url)
    startXHR.responseType = "json"
    startXHR.send()
    startXHR.onload = () => {
        console.log(startXHR.response)
        state = startXHR.response
        drawList()
}
}

pokemonListRequest(startUrl)

const drawList = () => {
    let pokemonElement = document.createElement("ul")
    pokemonElement.classList.add("pokemon-list")
    state.results.forEach((pokemon)=>{
        pokemonElement.innerHTML += `<li>${pokemon.name}</li>`
    })
    resultElement.innerHTML = null
    resultElement.appendChild(pokemonElement)
}