// let Name = prompt ("Як тебе звати","ніяк")
// let age = prompt ("Скільки тобі років","0")

// console.log(`Привіт, ${Name}`)
// console.log(`Вітаю у своему скрипті!`)
// console.log(`Твій рік народження ${2023 - age}`)

// let number = +prompt("Введіть будь яке число")

// console.log(`Перше число ${number}`)
// console.log(`Наступне ${number + 1}`)
// console.log(`Наступне ${number + 2}`)

// let a = +prompt("Сторона куба?")

// let V = a ** 3

// let S = 6 * (a ** 2) 

// console.log(`Куб з ребром ${a} см має об'єм ${V} та площу поверхні ${S}`)

// let number = +prompt("Введіть число")

// console.log(`Перше: ${number % 10}`)
// console.log(`Друге: ${Math.floor((number % 100)/10)}`)
// console.log(`Третє: ${Math.floor((number % 1000)/100)}`)

// let age = +prompt("Скільки тобі років?")

// if(age <= 18){
//     alert("Тобі післязавтра в школу!")
// }else if(age <= 21){
//     alert("Пі*дуй у коледж!")
// }
// else{
//     alert("Тобі завтра на роботу")
// }

// let number = +prompt("Введіть число")

// if(number % 2 == 0){
//     alert("число парне")
// }else{
//     alert("число непарне")
// }

let password = prompt("Введіть пароль:")
let password2 = promt("Підтвердіть пароль:")
if(password == password2){
    alert("Пароль правельний")
}else{
    alert("Пароль невірний")
}
