let house1 = +prompt("How many candies?")
let house2 = +prompt("How many candies?")
let house3 = +prompt("How many candies?")

console.log(`First house ${house1}`)
console.log(`Second house ${house2}`)
console.log(`Third house ${house3}`)

let sum = house1+house2+house3
console.log(`Candies in general ${sum}`)

if(house1<house2 && house1<house3){
    console.log(`First house is жмот`)
}if(house2<house1 && house2<house3){
    console.log(`Second house is жмот`)
}if(house3<house1 && house3<house1){
    console.log(`Third house is жмот`)
}

console.log(`Податки ${Math.floor(sum*0.13)}`)