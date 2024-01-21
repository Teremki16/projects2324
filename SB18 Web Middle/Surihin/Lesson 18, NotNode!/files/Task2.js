const path = require("path")

const Task2 = () => {
    console.log(path.basename(p)) // показ основного імені
    console.log(path.extname(p)) //
    console.log(path.dirname(p)) // показує папки
    console.log(path.parse(p).name) //
}

module.exports = Task2