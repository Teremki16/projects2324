// $(".append").on("click", function(){
//     $("ol").append("<li>Append item</il>")
// })
// $(".prepend").on("click", function(){
//     $("ol").prepend("<li>Prepend item</il>")
// })

// let team1=1
// let team2=2
// $(".t1").on("click", () =>{
//     let name=$("input").val()
//     $(".team1").after(`<div>${team1}. ${name}</div>`)
//     $("input").val("")
//     team1++
// })

// let team1=1
// let team2=2
// $(".t1").on("click", () =>{
//     let name=$("input").val()
//     $(".tt1:last-child").after(`<div class="tt1">${team1}. ${name}</div>`)
//     $("input").val("")
//     team1++
// })
// $(".t2").on("click", () =>{
//     let name=$("input").val()
//     $(".tt2:last-child").after(`<div class="tt2">${team2}. ${name}</div>`)
//     $("input").val("")
//     team2++
// })

$(".remove").on("click", function(){
    let elem = $("input[type='text']").val()//знаходимо за типом
    $(elem).remove()
})