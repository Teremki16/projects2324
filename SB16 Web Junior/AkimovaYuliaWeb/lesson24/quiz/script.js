let startTime;
let endTime
let RESULTS=[]

$("button").on("click", function(){
    startTime=$.now()//час запуску сторінки
    exam(1)
})

function exam(arg){
    let a=Math.floor(Math.random()*100)
    let b=Math.floor(Math.random()*100)
    let answer=a+b;
    alertify.prompt(Math.abs(arg-4)+":"+a+" + "+b+" = ?", function(e,val){
        if(answer==parseInt(val)){
            alertify.success("Correct: "+answer)
            arg--
        }
        else{
            alertify.error("Try again")
        }
        if(arg==0){
            endTime=$.now()
            let result=endTime-startTime
            alertify.alert("Congratulation, you spend "+ result/1000 +" seconds")
            RESULTS.push(result/1000)
            drawResult()
        }
        else{
            exam(arg)
        }
    })
}

function drawResult(result){
    $("table").html(``)
    // let name="ANONIM"
    // alertify.prompt("What if your name?", function(e,val){
    //    if(e){
    //     name=val
    //    }
    // })
    $("table").append(`
    <tr>
    <th width="50%">Nickname</th>
    <th width="10%">Time</th>
    </tr>`)
    RESULTS.forEach((el,i)=>{
        $("table").append(`<tr><td>${i+1}</td><td>${el}</td></tr>`)
    })

}