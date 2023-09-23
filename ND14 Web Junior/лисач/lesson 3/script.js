/*
let name = prompt("як тебе звати?", "соня")
let age = +prompt("скільки тобі рочків", 12)

console.log(`привіт,   ${name}`)
console.log(`вітаю в своєму скрпті!`)
console.log(`твій рік народження ${2023 - age}`)
*/



/*let number = Number(prompt("введіть число?"))

console.log(`Ваше число ${number++}`)
console.log(`Наступне ${number++}`)
console.log(`наступне ${number}`)
*/
/*
let a = + (prompt("введіть довжину сторони ребра см"))

console.log(`куб з ребром ${a} см, має об'єм ${a ** 3} см3 та площу повної поверхні ${6 * (a ** 2)} см 2`)
*/
/*
let age = +prompt("скільки тобі років")
if(age < 18){
    alert("шуруй у школу")
} else if (age < 21) { 
    alert("шуруй в університет");
} else {
    alert ("шуруй на роботу")
}

*/



/*
let a= +prompt("введи число?")
if( a%2==0){
    alert("парне")
} else {
    alert(не парне)
}
*/



/*
let password= prompt("введіть свій пароль")
let password= prompt("введіть свій пароль")

if(password==password1){
    alert(all good!)
} else {
    alert(введіть свій пароль ще раз)
}

*/



let a= +prompt("введіть ваше число")
let a1= +prompt("введіть ваше число")
let a2= +prompt("введіть ваше число")

let sum=0

if(a > 0){
    sum=sum + a
}
if(a > 0){
    sum=sum + a1
}
if(a > 0){
    sum=sum + a2
}
alert (`answer is ${sum}`)
