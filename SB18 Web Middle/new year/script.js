let url = " http://www.omdbapi.com/?s=christmas&apikey=df595b1e "

let xhr = new XMLHttpRequest()

xhr.open("GET", url);
xhr.responseType = "json"
xhr.onload = ()=>{
    let result = xhr.response.Search
    console.log(result)
    let wrapper = document.querySelector(".body")
    wrapper.innerHTML = ""
    result.forEach((el)=>{
        wrapper.innerHTML += `
        <div class="movie">
        <h2 class="title">${el.Title}</h2>
        <img src="${el.Poster}">
        <h3 class="year"> Year: ${el.Year}</h3>
        </div>
        `

    })
    
}

xhr.send()