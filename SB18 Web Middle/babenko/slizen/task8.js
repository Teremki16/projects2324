const path = require("path")
const fs = require("fs")
function task8() {
    let p = (path.join(__dirname, "files", "123.txt"))
   let txt = fs.writeFileSync(p, "utf8")
   txt = txt.toUpperCase()
   fs.writeFileSync(p, txt)
}

module.exports = task8