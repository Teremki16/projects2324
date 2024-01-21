const path = require("path")
const fs = require("fs")

function Task8() {
    let p = path.join(__dirname, "files", "text.txt")
    let txt = fs.readFileSync(p, "utf8")
    txt = txt.toUpperCase()
    fs.writeFileSync(p, txt)
    console.log(txt)
}

module.exports = Task8 //exportik 