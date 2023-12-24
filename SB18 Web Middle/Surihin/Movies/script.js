let url = "http://www.omdbapi.com/?s=christmas&apikey=872241fc"

let xhr = new XMLHttpRequest()

xhr.open("GET", url)
xhr.responseType = "json"
xhr.onload = () => {
    let result = xhr.response.Search
    console.log(result)
    let wrapper = document.querySelector(".movies")
    wrapper.innerHTML = ""
    result.forEach((el) => {
        wrapper.innerHTML += `
        <div class="movie">
        <h2>${el.Title}</h2>
        <img src="${el.Poster}">
        <h3>${el.Year}</h3>
        </div>
        `
    })  
}
xhr.send()