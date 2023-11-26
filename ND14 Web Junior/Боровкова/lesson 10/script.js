// function CC (){
// let links = document.querySelectorAll("a")
// for(let link of links){
//     let href = link.getAttribute("href")
//     if(!href) continue;
//     if(href.includes("://")) link.style.color = "pink"
// }
// }

// function RC (){
//     let links = document.querySelectorAll("a")
//     for(let link of links){
//         link.style.color = "black"
//     }
//     }
     
let count = 1;
let ul=document.querySelector(".todolist")

function add(){
    let value=document.querySelector("#text")
    if (value){
    let value = document.createElement("li")
    Element.innerText=value
    eloem.id = `Item${count}`
    Element.setAttribute("onclick", `delNote("Item${count}")`)
    count++
    ul.append(elem)
    document.querySelector("text").value=""
}
}

function delNote(arg){
    let elem=document.getElementById(arg)
    elem.style.textDecoration="line-through"
    setTimeout(()=>elem.remove(),1000)
}