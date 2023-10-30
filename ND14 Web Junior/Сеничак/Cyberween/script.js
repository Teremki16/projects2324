let house1 = +prompt("First house gave")
console.log(`First house gave ${house1} candies`)




let summ = house1 + house2 + house3
console.log(`syumma ${summ}`)

if(house1 < house2 && house1 < house3){
    console.log("Перший жмот")
}

console.log(`Податками забрали ${Math.floor(summ * 0.13)}`)
