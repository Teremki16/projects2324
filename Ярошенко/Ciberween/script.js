let number =+prompt ("перший будинок дав тобі .... цукерок")

console.log(`Перший будинок дав тобі ${number} цукерок`)

let number2 =+prompt ("Другий будинок дав тобі .... цукерок")

console.log(`Другий будинок дав тобі ${number2} цукерок`)

let number3 =+prompt ("Третій будинок дав тобі .... цукерок")

console.log(`Третій будинок дав тобі ${number3} цукерок`)

let summ = number + number2 + number3

if (number < number2 && number < number3){
    console.log(`Перший жмотяра`)
} 
 if (number2 < number3 && number2 < number){
    console.log(`Другий жмот`) 
} 
if (number3 < number && number3 < number2){
    console.log("Третій жмоттт")
} else (number == number2 && number == number3){
    console.log(`Цей світ прогнив..`)
}
 console.log(`Податками забрали ${Math.floor(summ * 0.13)}`)

