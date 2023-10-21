// let a=+prompt("Skilki chisel?")
// let ar=[];
// for(let i=0;i<a;i++){
//     ar.push(Math.floor(Math.random()*100))
// }
// console.log(ar)

function sumar(Array){
    let sum=0
    for(let number of Array){
        sum+=number
    }
    return sum
}
// console.log("sum="+sumar(ar))

function showarelem(Array){
    for(let i=0; i<ar.length;i++)
    console.log(`arr[${i}]=${Array[i]}`)
}
// showarelem()
let el
let ar=[];
do{
    el =+prompt("Input your number")
    if(ar.includes(el)){
        continue
    }
    else{
        ar.push(el)
    }
}while(el)

console.log(ar)