let arr = [];
let count = +prompt("how many random numbers do u want")

for(let i=0; i<count; i++){
    arr.push (Math.floor(Math.random()*100))
}

console.error(arr)

function arraySumm(array){
    let summ=0;
    for(let i=0; i<array.length;  i++){
        summ += array[i];
    }
    return summ;
}

console.log(`summ of elements of array: ${arraySumm(arr)}`)

function showArray(array){
    let summ=0;
    for(let i=0; i<array.length;  i++){
        console.log(`arr[${i}]= ${array[i]}`)
    }
}

showArray(arr)

let array=[]
let elem;
do{
    elem=+prompt("input random number")
    if(array.includes(elem)){
        continue
    }else{
        array.push(elem)
    }

}while(elem)

console.log(`Array without dublicates: `, array)