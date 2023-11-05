// console.dir(document.body)

// console.log(document.querySelector("h1").innerHTML)

// document.querySelector("h1").innerHTML = "<u>Hello MyKyta</u>"


// setInterval(()=>{
//     let elem = document.querySelector("h1")
//     elem.hidden = !elem.hidden
// }, 500)

const changeBG = ()=>{
    let val = document.querySelector("input").value
    document.body.style.background = val
}