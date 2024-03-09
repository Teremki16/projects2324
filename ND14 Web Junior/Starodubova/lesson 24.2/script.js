let startTime;
let endTime;
let results = []

$("button").on("click", ()=>{
    startTime = $.now();
    exam(3)
})

function exam(q){
    let a = Math.floor(Math.random()*100)
    let b = Math.floor(Math.random()*100)
    let answer = a + b
    alertify.prompt(`Запитання ${Math.abs(q - 4)}: ${a} + ${b} = ?`, function(e, val){
        if(e){
 if(answer == parseInt(val)){
    alertify.success(`Правильно, ти молодець!👍`)
    q--
 }else{
    alertify.error(`От невдача😣, спробуй ще раз, в тебе все вийде!`)
 }
 if(q == 0){
    endTime = $.now();
let t = (endTime - startTime)/1000
    alertify.alert(`Ти витратив ${t} секунд!😨`)
    addResult(t);
 }else{
    exam(q)
 }
        }else{
            return 0
        }
    } )
}

function addResult(res){
    alertify.prompt('Як тебе звати?', function(e, val){
        if(e){
   results.push({name: val, time: res})
   $("table").empty()
   $("table").append(`
   <tr>
    <th>Name</th>
    <th>Time</th>
   </tr>
`)
results.forEach((el)=>{
    $("table").append(`<tr><td>${el.name}</td><td>${el.time}</td></tr>`)
})
        }else{
            return 0
        }
    })

}

