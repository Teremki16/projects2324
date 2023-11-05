// function cc(){
//     let links = document.querySelectorAll("a")
//     for(let link of links){
//         if href = link.getAttribute("href")
//         if(!href) continue;
//         if(href.includes('://')) link.style.color = "orange"
//     }
// }

let count = 1;
let ul = document.querySelector("#todolist")

function addNote() {
    let val = document.querySelector("#text").value 
    if(val){
        let item = document.createElement("li")
        item.innerText = val
        item.id = `Item${count}`
        item.setAttribute("onclick", `removeNote(${count})`)
        count++;
        ul.append(item)
        document.querySelector("#text").value = ""
    }
}

function removeNote(number){
    let elem = document.querySelector(`#Item${number}`)
    elem.style.textDecoration = "line-through"
    setTimeout(function(){
        elem.remove()
    }, 1000)
}