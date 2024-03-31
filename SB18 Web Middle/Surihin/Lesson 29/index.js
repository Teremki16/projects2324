import mysql from "mysql2"
import http from "http";

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "chat",
    port: 3306
})

// connection.query("insert into message (content, author_id, dialog_id) values ('leruleruleru', 1, 1)", (err, rows, fields) => {
//     console.log(rows)
// })
// connection.end()

http.createServer((req, res) => {
    if (req.url == "/message" && req.method == "GET") {
        connection.query("select * from message", (err, rows, fields) => {
            res.end(JSON.stringify(rows))
        })
    }else{
        res.statusCode = 404
        res.end("<h1>404</h1>")
    }
}).listen(3000, () => console.log("server started xD"))