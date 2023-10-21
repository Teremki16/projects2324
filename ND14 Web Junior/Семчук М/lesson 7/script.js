let hhreht = [];

let count = +prompt("how many random numbers do you want?")

for(let i = 0; i < count; i++){
    hhreht.push(Math.floor(Math.random()*100));
}

console.error(hhreht)

function arraySumm(array){
    let summ = 0;
    for(let i = 0; i < array.length; i++){
        summ += array[i];
    }
    return summ;
}

console.log(`Sum of elements of array: ${arraySumm(hhreht)}`)

function showArray(array){
    for(let i = 0; i < array.length; i++){
        console.log(`hhrent[${i}] = ${array[i]}`)
    }
}

showArray(hhreht)


let array = []
let elem;
do{
    elem = +prompt("input random number")
    if(elem == 0) break;
    if(array.includes(elem)){
        continue
    }else{
        array.push(elem)
    }
}while(elem)

cpnsole.log(`Array without dublicstes: `, array)