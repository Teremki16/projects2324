let count = 1

function addToDo(){
    let val = document.querySelector("input").value
    document.querySelector(".task").innerHTML += `
        ${count}. ${val} <br>
    `

    document.querySelector("input").value = ''
    count++
}

function clear1(){
    document.querySelector(".task").innerHTML=""
    count = 1
}

