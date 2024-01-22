const path = require("path");
const fs = require("fs");

function task6m1() {
    let p = path.join(__dirname, "files", "text.txt");
    console.log(Buffer.from(fs.readFileSync(p)).toString());
}

function task6m2() {
    let p = path.join(__dirname, "files", "text.txt");
    console.log(fs.readFileSync(p, "utf8"));
}

module.exports = { task6m1, task6m2 };
