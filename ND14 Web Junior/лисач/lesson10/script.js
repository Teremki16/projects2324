// function CC(){
//     let links = document.querySelectorAll("a")
//     for(let link of links){
//         let href = link.getAttribute("href")
//         if(!href) continue;
//         if(href.includes("://")) link.style.color = "red"

//     }
// }


// function RC(){
//     let links = document.querySelectorAll("a")
//     for(let link of links){
//         link.style.color = "black"
//     }
//}



let count = 1
let ul = document.querySelector(".todolist")


function add(){
    let value = document.querySelector("#text").valueif 
    if(value){
        let elem = document.createElement("li");
        elem.innerText = value;
        elem.id = `Item${count}`;
        elem.setAttribute("onclick", `delNote("Item${count}")`)
        count++
        ul.append(elem)
        document.querySelector("#text").value = ""
    }
}