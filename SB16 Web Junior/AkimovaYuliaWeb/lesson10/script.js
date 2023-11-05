function cc(){
    let links=document.querySelectorAll("a")
    for(let link of links){
        let href=link.getAttribute("href")
        if(!href) continue;
        if(href.includes('://')) link.style.color = "orange"
    }
}
function rc(){
    let links=document.querySelectorAll("a")
    for(let link of links){
        let href=link.getAttribute("href")
        if(!href) continue;
        else link.style.color = "white"
}}