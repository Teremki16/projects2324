const path = require("path")
const fs = require("fs")

function task5(folderName, count) {
    let fn = path.dirname(__dirname)
    for (let i = 0; i < count; i++) {
        fn = path.join(fn, folderName + " "+ i)
        fs.mkdirSync(fn)
    }
}

module.exports = task5