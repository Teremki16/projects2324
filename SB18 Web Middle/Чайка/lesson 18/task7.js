
const path = require("path")
const fs = require("fs")

function task7(message) {
    let p = (path.join(__dirname, "files", "text.txt"))    
    fs.appendFileSync(p, message);
}

module.exports = task7