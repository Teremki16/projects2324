const path = require("path")
const fs = require("fs")

function task8(message){
    let p = (path.join(__dirname, "files", "text.txt"))
    let txt = fs.readFileSync(p, "utf8");
    txt = txt.toUpperCase()
   fs.writeFileSync(p, txt);
   console.log(txt)
}

module.exports = task8