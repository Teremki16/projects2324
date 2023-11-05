let house1 = +prompt("How many candies do you get from first house?");
console.log("From first house:  "+ house1)
let house2 = +prompt("How many candies do you get from second house?");
console.log("From second house: "+ house2)
let house3 = +prompt("How many candies do you get from third house?");
console.log("From third house: "+ house3)

let summ = house1 + house2 + house3;
console.log("Summa: "+ summ)

if(house1 < house2 && house1 < house3){
    console.log(`Жмот живе у 1 будинку `)
}else if(house2 < house1 && house2 < house3){
    console.log(`Жмот живе у 2 будинку `)
}else{
    console.log(`Жмот живе у 3 будинку `)
}


console.log(`Привиди заберуть податків: ${summ * 0.13}`);