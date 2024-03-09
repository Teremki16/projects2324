let startTime;
let endTime;
let results = [];

$("button").on("click", function(){
    startTime = $.now()
    exam(1)
})

function exam(arg){
    let a = Math.floor(Math.random()*100)
    let b = Math.floor(Math.random()*100)
    let answer = a + b
    alertify.prompt(`${a} + ${b} = ?`, function(e, val){
        if(answer == parseInt(val)){
           alertify.success("strow your mum outside the window" + answer) 
           arg--;


        }else {
            alertify.error("Wrong bitch try again")
        }
        if(arg == 0){
            endTime = $.now()
            let result = endTime - startTime
            alertify.alert("YOUR MUM ITS LIKE TRASH IN MY BED" + result/1000 + "second!")
            results.push(result/1000)
            drawResult()

        }else{
            exam(arg)
        }
    })
}

function drawResult(result){
    $("table").html(``)
    // let name = "AAAAAAAA"
    // alertify.prompt("What is your name?", function(e, val){
    //     if(e){
    //         name = val
    //     }
    // })
    $("table").append(`
    <tr>
    <th width="10%">Nickname</th>
    <th width="10%">time</th>
    </tr>
    `)
    results.forEach((el, i)=>{
      $("table").append(`<tr></tr>${i+1}</td><td>${el}</td></tr>`)
    })
}
