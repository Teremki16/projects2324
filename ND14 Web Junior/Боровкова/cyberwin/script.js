let house1 =+prompt("first house gave")
console.log (`first house gave you ${house1} candies`)
let house2 =+prompt("secnd house gave")
console.log (`second house gave you ${house2} candies`)
let house3 =+prompt("third house gave")
console.log (`third house gave you ${house3} candies`)

let summ= house1 + house2 + house3
console.log(`summ is ${summ}`)

if(house1 < house2 && house1 < house3){
    console.log("first looser")

}
if(house2 < house1 && house2 < house3){
    console.log("second looser")


}

if(house3 < house1 && house3 < house2){
    console.log("third looser")

}

console.log (`sceleton stole ${Math.floor(summ*0.13)}`)