let house1 = +prompt("first house gave")

console.log(`first house gave ${house1} candies`)

let house2 = +prompt("second house gave")

console.log(`second house gave ${house2} candies`)

let house3 = +prompt("third house gave")

console.log(`third house gave ${house3} candies`)

let sum = house1 + house2 + house3
console.log(`syuma ${sum}`)

if(house1 < house2 && house1 < house3){
    console.log(`Перший жлоб`)
} 
else if (house2 < house1 && house2 < house3){
    console.log(`Другий жлоб`)
}
else if (house3 < house1 && house3 < house2){
    console.log('Третій жлоб')
}

console.log(`Податком забрали ${Math.floor(sum * 0,13)}`)