$(".rules").slideUp()

let answers = [
    "яблоко",
    "груша",
    "город",
    "школа",
    "сайт",
    "браузер",
    "плагін",
    "колір",
    "стиль",
    "язик",
    "візерунок",
    "сорока"
]

$(".slideRules").on("click", function(){
    $(".rules").slideToggle()
})