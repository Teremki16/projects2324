const path = require("path")
const fs = require("fs")

function Task6m1() {
    let p = (path.join(__dirname, "files", "text.txt"))
    console.log(Buffer.from(fs.readFileSync(p, "utf8")).toString())
}

function Task6m2() {
    let p = (path.join(__dirname, "files", "text.txt"))
    console.log(fs.readFileSync(p, "utf8"))
}

module.exports = { Task6m1, Task6m2 }