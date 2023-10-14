let pokemons;
let promises = [];
let sortedPokemons;

let resultElement = document.getElementById("result")
let navElement = document.querySelector("nav")

const kantoPokemonsUrl = 'https://pokeapi.co/api/v2/pokemon?limit=127';
const kantoXHR = new XMLHttpRequest()
kantoXHR.open("GET", kantoPokemonsUrl)
kantoXHR.responseType = "json"
kantoXHR.send()
kantoXHR.onload = () => {
    kantoXHR.response.results.forEach((pokemon)=>{
        let promise = new Promise(function(reslove, reject){
            let xhr = new XMLHttpRequest()
              xhr.open("GET", pokemon.url)
              xhr.responseType = "json"
              xhr.send()
              xhr.onload = () => {
                 if(xhr.status == 200){
                    reslove(xhr.response)
           }else{
            reject(xhr.statusText)
           }
        }
        xhr.onerror = () => {
           reject(xhr.statusText)
        }
        })
       promises.push(promise);
    })
    Promise.all(promises).then((result)=>{
        pokemons = result
        console.log(pokemons)
        resultElement.innerHTML = ""
        pokemons.forEach(pokemon=>drawPokemon(pokemon))
    })
}


const drawPokemon = (pokemon) => {
     let pokemonElement = document.createElement("div")
     pokemonElement.classList.add("pokemon")
     pokemonElement.innerHTML = `
     <p>id: ${pokemon.id}</p>
     <hr>
     <h1>${pokemon.name}</h1>
     <img src="${pokemon.sprites.front_default}">
     <div class="status">
     <p class="hp">&#10084; ${pokemon.stats[0].base_stat}</p>
     <p class="attak">&#9876; ${pokemon.stats[1].base_stat}</p>
     <p class="defence">&#128737; ${pokemon.stats[2].base_stat}</p>
     </div>
     `
     let typeList = document.createElement("ul")
     pokemon.types.forEach((type)=>{
        let typeItem = document.createElement("li")
        typeItem.innerText = type.type.name
        typeList.appendChild(typeItem)
     })
     pokemonElement.appendChild(typeList)
     resultElement.appendChild(pokemonElement)
    }

let order = 1
let sortForm = document.getElementById("sprt-form")

sortForm.addEventListener("change", (e) => {
    if(event.target.name == order){
        switch(event.target.value){
            case "upsc";
                order = 1
                break;
            case "desc";
                order = -1
                break;
        }
    }
})