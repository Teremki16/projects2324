$(document).ready(()=>{
    $.ajax("https://pokeapi.co/api/v2/pokemon", {
        data: {
            limit: 100,
            offset: 50,
        },
        success: (response)=> {
            console.log(`Start query`, response.results)

            let filteredPokemons = response.results.filter((pokemon)=>{
                return  pokemon.name.length > 9 
            })
            console.log(`Filtered pokemons: `, filteredPokemons)

            let sortedPokemons = filteredPokemons.sort((a, b)=>{
                if(a.name > b.name) return 1;
                if(a.name < b.name) return -1;
                return 0;
            })
            console.log("Sorted pokemons: ", sortedPokemons)

            let ol = document.createElement("ol")
            // $(ol).addClass("list")
            sortedPokemons.forEach((pokemon)=>{
                ol.innerHTML += `<li>${pokemon.name}</li>`
            })
            $("body").append(ol)

        },
        error: (error)=>{
            console.log(error.responseText)
            $("body").html(`<h1>${error.responseText}</h1>`)
        }
    })
})