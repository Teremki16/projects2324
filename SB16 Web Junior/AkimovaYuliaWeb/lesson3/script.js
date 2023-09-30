// let name = prompt("Як тебе звати?","_____")
// let age = prompt("Скільки тобі років?","15")
// console.log("Тобе звати "+name)
// console.log("Вітаю тебе у своєму скрипті")
// console.log("Твій рік народження "+ (2023-age) )

// let a = +prompt("Ведіть число", "0")
// console.log("Перше число:" + a)
// console.log("Наступне число:" + (1 + a))
// console.log("Введене число:" + (2 + a))

// let name = prompt("Ведіть ребро куба ","0")
// console.log("Сторона куба "+name)
// console.log("Об'єм куба "+(name**3))
// console.log("Площа куба "+(6*(name**2)))

// let name = prompt("Ведіть число ","")
// console.log("Введене число "+name)
// console.log("Сума цифр "+((Math.floor(name/100))+(Math.floor((name/10)%10))+(name%10)))
// console.log("Добуток цифр "+((Math.floor(name/100))*(Math.floor((name/10)%10))*(name%10)))

// let name = +prompt("Скільки тобі років ","0")
// if (name<=18){
//     alert("Тобі завтра в школу!")
// }
// else if(name<=21){
//     alert("Шуруй на пари")
// }
// if(name>=21){
//     alert("Гони на роботу!")
// }

// let name = +prompt("Ведіть число ")
// if(name%2==0){
//     alert(name+ "-парне число")
// }
// else{
//     alert(name+"-непарне число")
// }

let name = prompt("Ведіть пароль ")
let Name = prompt("Підтвердіть пароль ")
if(name == Name){
    alert("Пароль прийнято")    
}
else{
    alert("Невірний пароль")
}
