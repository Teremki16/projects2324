let count = 1;
let ul = document.querySelector("#todolist")

function addNote() {
    let val = document.querySelector("#text").value
    if(val) {
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
    let element = document.querySelector(`#Item${number}`)
    element.style.textDecoration = "line-through"
    setTimeout(function(){
        element.remove()
    }, 1000)
}