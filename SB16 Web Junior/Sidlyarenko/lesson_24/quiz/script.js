let startTime
let endTime
let results = []

$("button").on("click", ()=>{
    startTime = $.now()
    exam(1)
})

function exam(arg){
    let a = Math.floor(Math.random()*100)
    let b = Math.floor(Math.random()*100)
    let answer = a + b
    alertify.prompt(`${Math.abs(arg - 4)}): ${a} + ${b} = ?`, function(e, val){
        if(answer == parseInt(val)){
            alertify.success("Correc" + answer)
            arg--
        }else{
            alertify.error("Wrong answer? try again!")
        }
        if(arg == 0){
            endTime = $.now()
            let result = endTime - startTime
            alertify.alert("Congratulation, you spend " + result/1000 + "seconds!")
            results.push(result/1000)
            drawResult()
        }else{
            exam(arg)
        }
    })
}

function drawResult(result){
    $("table").html(``)
    // let name = "ANONIM"
    // alertify.prompt("What is your name?", function(e, val){
    //     if(e){
    //         name = val
    //     }
    // })
    $("table").append(` <tr>
        <th width="10%">Nickname</th>
        <th width="10%">time</th>
    </tr>`)
    results.forEach((el, i)=>{
        $("table").append(`<tr><td>${i+1}</td><td>${el}</td></tr>`)
    })

}

