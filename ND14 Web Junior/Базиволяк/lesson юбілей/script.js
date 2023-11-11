function CC(){
let links = document.querySelectorAll("a")
for(let link of links){
let href = link.getAttribute("href")
if(!href) continue;
if (href.includes("://"))link.style.color="orange"
   }
}

function RC(){
    let links = document.querySelectorAll("a")
    for (let link of links){
        link.style.color="black"
    }
}