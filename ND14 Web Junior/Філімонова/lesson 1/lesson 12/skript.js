 let canvas = document.querySelector("canvas")
 let ctx = canvas.getContext("2d")

 canvas.width = window.innerWidth
 canvas.height = window.innerHeight

 let lw = 10
 let color ="black"
 let isMouseDown = false;

 let colorPicker = document.querySelector("#color")
 let range= document.querySelector("#range")
 let rangeText= document.querySelector("#rangeValue")

 colorPicker.addEventListener("change", (event)=>{
   color = event.target.value
 })
 
 function fillin(){
    ctx.fillStyle = color
    ctx.fillRect(0,0, canvas.width, canvas.height)
 }

 function clearAll(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
 }

 canvas.addEventListener("mousedown", ()=>{
   isMouseDown = true;
   ctx.beginPath();
 });


 canvas.addEventListener("mouseup", ()=>{
   isMouseDown = false;
 });

 canvas.addEventListener("mousemove", (event)=>{
   if(isMouseDown){
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = lw;
      ctx.lineTo(event.clientX, event.clientY);
      ctx.stroke();

      ctx.beginPath()
      ctx.arc(event.clientX, event.clientY, lw/2, 0, 2 * Math.PI);
      ctx.fill()

      ctx.beginPath();
      ctx.moveTo(event.clientX, event.clientY)
   }
 });

 range.addEventListener("input", (event)=>{
   lw = event.target.value;
   rangeText.innerHTML = lw
 })

 document.querySelector("a").addEventListener("click", ()=>{
   let url = canvas.toDataURL().replace("image/png", "image/octet-stream")
   document.querySelector("a").href = url
 })