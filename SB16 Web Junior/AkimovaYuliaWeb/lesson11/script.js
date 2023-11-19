let canvases=document.querySelectorAll("canvas")
let ctx=[]

for(let i=0;i<canvases.length;i++){
    canvases[i].width=700
    canvases[i].height=500
    ctx.push(canvases[i].getContext("2d"))
}

ctx[0].moveTo(150,250)
ctx[0].lineTo(350,400)
ctx[0].lineTo(500,120)
ctx[0].lineWidth = 5;
ctx[0].stroke();

ctx[1].beginPath();
ctx[1].arc(350,250,100,(25*Math.PI)/180, (330*Math.PI)/180)
ctx[1].lineTo(350,250)
ctx[1].fillStyle="yellow"
ctx[1].lineWidth=5;
ctx[1].closePath()
ctx[1].fill()
ctx[1].stroke();

ctx[1].beginPath();
ctx[1].fillStyle="black"
ctx[1].arc(330,210,10,0,2*Math.PI)
ctx[1].closePath()
ctx[1].fill()

ctx[2].strokeRect(215,115,266,266)
ctx[2].strokeRect(218,118,260,260)

ctx[2].fillStyle = "orange"
ctx[2].fillRect(220,120, 256,256)
ctx[2].fillStyle = "brown"
for(let i=0;i<8;i+=2){
    for(let j=0;j<8;j+=2){
        ctx[2].fillRect(220+i*32,120+j*32,32,32)
        ctx[2].fillRect(252+i*32,152+j*32,32,32)
    }
}

ctx[3].beginPath();
ctx[3].arc(280,180,75,(150*Math.PI)/180, (5*Math.PI)/180)
ctx[3].strokeStyle = "red"
ctx[3].lineWidth=5;
ctx[3].fillStyle="orange"
ctx[3].fill()
ctx[3].stroke()
ctx[3].closePath()
ctx[3].beginPath();
ctx[3].arc(430,180,75,(175*Math.PI)/180, (65*Math.PI)/180)
ctx[3].strokeStyle = "red"
ctx[3].lineWidth=5;
ctx[3].fillStyle="orange"
ctx[3].fill()
ctx[3].stroke()
ctx[3].closePath()
ctx[3].beginPath();
ctx[3].arc(450,323,75,(270*Math.PI)/180, (150*Math.PI)/180)
ctx[3].strokeStyle = "red"
ctx[3].lineWidth=5;
ctx[3].fillStyle="orange"
ctx[3].fill()
ctx[3].stroke()
ctx[3].closePath()