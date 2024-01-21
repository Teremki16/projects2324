const path = require("path")
const fs = require("fs")

function Task4(message) {
    let p = path.join(__dirname, 
        "files", "text.txt")
        fs.writeFileSync(p, message)
}

module.exports = Task4 //exportik 