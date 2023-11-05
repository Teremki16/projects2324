let a=+prompt("Skilky zukerok dav pershiy dom?")
console.log("pershiy dom:"+a)
let b=+prompt("Skilky zukerok dav drugiy dom?")
console.log("drugiy dom:"+b)
let c=+prompt("Skilky zukerok dav tretiy dom?")
console.log("tretiy dom:"+c)
console.log("Total:"+(a+b+c))
if(a<b && a<c){
    console.log("Naymenshe: 1")
}
else if(b<a && b<c){
    console.log("Naymenshe: 2")
}
else{
    console.log("Naymenshe: 3")
}
let s=(a+b+c)%13
console.log("To ghosts:"+s)