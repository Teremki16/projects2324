let startTime;
let endTime;

$("button").on("click", ()=>{
    startTime = $.now()
    exam(3)
})

function exam(q){
    let a = Math.floor(Math.random()*100)
    let b = Math.floor(Math.random()*100)
    let answer = a + b
    alertify.prompt(`Question ${Math.abs(q - 4)}:${a} + ${b} = ?`, function(e, val){
        if(e){
            if(answer == parseInt(val)){
                alertify.success(`Correct: ${answer}`)
                q--
            }else{
                alertify.error("wrong, try again!")
            }
            if(q == 0){
                endTime = $.now();
                let t = (endTime - startTime)/1000
                alertify.alert(`You spend ${t} seconds!`)
            }else{
                exam(q)
            }
        }else{
            return 0
        }
    })
}