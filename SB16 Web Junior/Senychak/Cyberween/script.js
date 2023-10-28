let house1 = +prompt("first house");
console.log(`Перший дав ${house1} цукерок`)
let house2 = +prompt("second house");
let house3 = +prompt("third house");

let summ = house1 + house2 + house3;
console.log("summa");

if (house1 < house2 && house1 < house3) {
    console.log(`Жмот живе в 1 будинку`);
}

console.log(`Прививиди заберуть податками: ${summ * 0.13}`);
