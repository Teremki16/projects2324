const url = `https://pokeapi.co/api/v2/pokemon/`;
const search = document.querySelector("#submit")
const searchinput = document.querySelector("#search")
const mainElemnt = document.querySelector("main")


search.addEventListener("click", () => {
    searching(searchinput.value)
})

function searching(pokemonName) {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", url + pokemonName)
    xhr.responseType = "json"
    xhr.send()
    xhr.onload = () => {
        if (xhr.status > 200) {
            mainElemnt.innerHTML = "<div class = 'pokemon'> Такого покемона не існує</div>"
        } else {
            drawPokemon(xhr.response)
        }

    }
    xhr.onerror = (err) => {
        console.error(err)
        mainElemnt.innerHTML = "<div class = 'pokemon'>Сталася помилка запиту, спробуйте ще раз </div>"
    }
}

function drawPokemon(obj) {
    mainElemnt.innerHTML = ""
    let pokeElement = document.createElement("div")
    pokeElement.classList.add("pokemon")
    pokeElement.innerHTML = `
    <p>ID:${obj.id}</p>
    <hr><hr>
    <h1>Name:${obj.name}</h1>
    <img src="${obj.sprites.front_default}">
    

    `

    let ul = document.createElement("ul")
    obj.types.forEach((el) => {
        let li = document.createElement("li")
        li.textContent = el.type.name
        ul.appendChild(li)
    })
    mainElemnt.appendChild(pokeElement)

    pokeElement.appendChild(ul)

    let itemsElem = document.createElement("div")
    obj.held_items.forEach((el) => {
        let x = new XMLHttpRequest()
        x.open("GET", el.item.url)
        x.responseType = "json"
        x.send()
        x.onload = () => {
            let element = document.createElement("div")
            let res = x.response
            element.innerHTML = `
        <h4>${res.name}</h4>
        <img src = "${res.sprites.default}">
        <p>Cost:${res.cost}</p>
        
        `
            itemsElem.appendChild(element)
        }
        pokeElement.appendChild(itemsElem)
    })
}