let house1 =+prompt("First house gave")
let house2 =+prompt("Second house gave")
let house3 =+prompt("thirt house gave")
console.log(`First house gave ${house1}candies`)
console.log(`Second house gave ${house2}candies`)
console.log(`thirt house gave ${house3}candies`)


let sum = house1 + house2 + house3
console.log(`summa ${sum}`)
if(house1 < house2 && house1 < house3){
    console.log("Перший жмот")
}
if(house2 < house1 && house2 < house3){
    console.log("Другий жмот")
}
if(house3 < house1 && house3 < house2){
    console.log("Третій жмот")
}

сonsole.log(`Податки забрали ${Math.floor(sum * 0.13)}`)