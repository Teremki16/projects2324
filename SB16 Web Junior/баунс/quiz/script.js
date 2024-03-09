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
    alertify.prompt(`${Math.abs(arg - 4)}?: ${a} + ${b} = ?`, function(e, val){
        if(answer == parseInt (val)){
            alertify.success("Correct: "+ answer)
            arg--;
        }else {
            alertify.error("Wrong answer? try again!")
        }
        if(arg == 0){
            endTime = $.now()
            let result = endTime - startTime
            alertify.alert("congrats, you spend" + result/100 + "seconds!")
            results.push(results/1000)
            drawResult()
        }else {
            exam(arg)
        }
    })
}

function drawResult(result){
    $("table").html(``)
    // let name = "ANONIM"
    // alertify.prompt("what is ur name?", function(e, val){
    //     if(e){
    //         name = val
        // }
    // })
    $("table").append(`
    <tr>
            <th width="10%">Nickname</th>
            <th width="10%">time</th>
       </tr>
    `)
    results.forEach((el, i)=>{
        $("table").append(`<tr><td>${i+1}</td><td>${el}</td></tr>`)
    })
}