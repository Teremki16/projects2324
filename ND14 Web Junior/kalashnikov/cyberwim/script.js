let house1 = +prompt("First house gave")

console.log(`first hous gave ${house1} candies`)


let house2 = +prompt("Second house gave")

console.log(`Second hous gave ${house2} candies`)


let house3 = +prompt("Third house gave")

console.log(`Third hous gave ${house3} candies`)

let summ = house1 + house2 + house3
console.log(`summa ${summ}`)

if(house1 < house2 && house1 < house3){
    console.log("Перший жмот")
}
if(house2 < house1 && house2 < house3){
    console.log("Другий жмот")
}
if(house3 < house1 && house3 < house2){
    console.log("Третій жмот")
}

console.log(`Податкам забрали ${Math.floor(summ * 0.13)}`)