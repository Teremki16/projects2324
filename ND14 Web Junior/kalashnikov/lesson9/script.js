// // console.dir(document.body)

// // console.log(document.querySelector("h1").innerHTML)

// // document.querySelector("h1").innerHTML = "<u>Hello Mykyta</u>"

// // setInterval(()=>{
// //     let = elem = document.querySelector("h1")
// //     elem.hidden = !elem.hidden
// // }, 500)

// const changeBG = ()=>{
//     let val = document.querySelector("input").value
//     document.body.style.background = val
// }

let count = 1;

function change(){
    console.log("fgf")
    let value = document.querySelector("input").value
    document.querySelector(".result").innerHTML += `${count}. ${value} <br>`
    count++;
    document.querySelector("input").value = "";
}

function clearNote(){
    document.querySelector(".result").innerHTML = ""
    count = 1;
}