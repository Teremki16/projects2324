const path = require("path")
const fs = require("fs")
function task4(message) {
    let p = (path.join(__dirname, "files", "123.txt"))
    fs.writeFileSync(p, message)
}

module.exports = task4