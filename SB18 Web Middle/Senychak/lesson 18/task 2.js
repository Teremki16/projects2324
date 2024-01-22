const path = require("path");
const task2 = (p) => {
    console.log(path.basename(p));
    console.log(path.extname(p));
    console.log(path.dirname(p));
    console.log(path.parse(p).name);
};

module.exports = task2;
