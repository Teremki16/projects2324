let house1 = +prompt("First house gave ")
console.log(`first house gave ${house1} candies`)
let house2 = +prompt("second house gave ")
console.log(`first house gave ${house1} candies`)
let house3 = +prompt("third house gave ")
console.log(`first house gave ${house1} candies`)







let summ = house1 + house2 + house3
console.log(`syumma${summ}`)

if(house1 < house2 && house1 < house3){
    console.log("перший тупий жмот")
}
if(house1 < house2 && house1 < house3){
    console.log("другий тупий жмот")
}
if(house1 < house2 && house1 < house3){
    console.log("третій тупий жмот")
}

console.log(`податками забрали ${Math.floor(summ * 0.13)}`)