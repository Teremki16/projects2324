
// let Name = prompt('Як тебе звати?', 'ніяк');
// let age = prompt('Скіко лет?', '56');
// console.log(`Привіт, ${Name}`)
// console.log(`Вітаю тебе своєму скрипті!`)
// console.log(`Твій рік просходження ${2023 - age}`)

// let number = +prompt('введіть будь яке число')
// console.log(`Перше число ${number}`)
// console.log(`Наступне число ${number+1}`)
// console.log(`Наступне число ${number+2}`)

// let a = +prompt('Сторона куба')

// let V = a ** 3

// let S = 6 * (a ** 2)
// console.log(`Куб з ребром ${a} см має об'єм ${V} та полщу поверхні ${S}`)

// let number = +prompt('число сюда')
// console.log(`перше: ${number % 10}`)
// console.log(`друге: ${Math.floor((number % 100)/10)}`)
// console.log(`трете: ${Math.floor((number % 1000)/100)}`)

// let age = +prompt('скоко лет?')

// if(age <= 18){
//     alert('Тебе в школу завтра, спать иди!')
// }else if(age <=21){
//     alert('Шуруй на пары завтра здавать долги')
// }
// else{
//     alert('иди копи себе на гроб')
// }

// let number = +prompt('черкани число сюда')

// if(number % 2 == 0){
//     alert('Молодец!')
// }else{
//     alert('Ну ты и чайник!')
// }

let password = prompt('номер карточки?')

let password2 = prompt(`Перепроверь!`)
if(password == password2){
    alert(`правильно`)
}else{
    alert('Неверный код карточки')
}