let startTime;
let endTime;
let results = []

$("button").on("click", ()=>{
    startTime = $.now();
    exam(1)
})



function exam(q){
    let a = Math.floor(Math.random()*10)
    let b = Math.floor(Math.random()*10)
    let answer = a + b
    alertify.prompt(`Question ${Math.abs(q - 4)}: ${a} + ${b} = ?`, function(e, val){
        if(e){
            if(answer == parseInt(val)){
                alertify.success(`Correct: ${answer}`)
                q--
            }else{
                alertify.error("Wrong, try again!")
            }
            if(q == 0){
                endTime = $.now();
                let t = (endTime - startTime)/1000
                alertify.alert(`You spend ${t} seconds!`)
                addResult(t);
            }else{
               exam(q)
            }
        }else{
            return 0
        }
    })
}

function addResult(res){
    alertify.prompt("what is your name, i dont care, actually, but anyways?", function(e,val){
        if(e){
            results.push({name: val, time: res})
            $("table").empty()
            $("table").append(`<tr>
                    <th>Name</th>
                    <th>Time</th>
                </tr>`)
            results.forEach((el)=>{
                $("table").append(`<tr><td>${el.name}</td><td>${el.time}</td></tr>`)
            })
        }else{
            return 0
        }
    })
}