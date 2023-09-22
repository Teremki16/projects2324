// let Name = prompt("Як тебе звати?", "ніяк");
// let age = prompt("Скіко лєт табє?", "0");

// console.log(`Привіт, ${Name}`)
// console.log(`Вітю у своєму скрипті!`)
// console.log(`Твій рік народження ${2023 - age}`)

// let number = +prompt("Введіть будь яке число");

// console.log(`Перше число ${number}`);
// console.log(`Наступне ${number + 1}`);
// console.log(`Наступне ${number + 2}`);

// let a = +prompt("Сторона куба?")

// let V = a ** 3

// let S = 6 * (a ** 2)

// console.log(`Куб з ребром ${a} см має обєм ${V} та площу поверхні ${S}`)


// let number = +prompt("Введіть число")

// console.log(`Перше: ${number % 10}`)
// console.log(`Друге: ${Math.floor((number % 100)/10)}`)
// console.log(`Третє: ${Math.floor((number % 1000)/100)}`)

// let age = +prompt("Скільки тобі років?")

// if(age <= 18){
//     alert("Тобі післязавтра в школу!")
// }else if(age <= 21){
//     alert("Шуруй на пари!")
// }
// else{
//     alert("Шуруй на роботу, бєздєльнік")
// }

// let number = +prompt("Ведіть число")

// if(number % 2 == 0){
//     alert("число парне")
// }else{
//     alert("число непарне")
// }
let password = prompt("Input ur password, please: ");
let checker = prompt("Repead ur password: ");
if(password != checker){
alert("Passwords isn matching");
}else alert("Correct, passwords are matched!");