let url = "http://www.omdbapi.com/?s=christmas&apikey=b0b94363"

let xhr = new XMLHttpRequest()

xhr.open("GET", url);
xhr.responseType = "json"
xhr.onload = ()=>{
    let result = xhr.response.Search
    let wrapper = document.querySelector(".movies")
    wrapper.innerHTML = ""
    result.forEach((el)=>{
        wrapper.innerHTML += `
            <div class="movie">
                <h2>${el.Title}</h2>
                <img src="${el.Poster}">
                <h3>Year: ${el.Year}</h3>
            </div>
        `
    })
}
xhr.send()