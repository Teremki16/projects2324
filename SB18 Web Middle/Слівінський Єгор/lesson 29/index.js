import mysql from "mysql2";
import http from "http";

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "world",
    port: 3306,
});

// connection.query("insert into message (content, author_id, dialog_id) values ('sdfsdfsdfsdf', 1, 1)", (err, rows, fields) => {
//     console.log(rows)
// })

// connection.end()

http.createServer((req, res) => {
    if(req.url == "/message" && req.method == "GET") {
        connection.query("select * from country", (err, rows, fields) => {
            let li = rows.map(el=>
                `<li>${el.Name}}</li>`
            )
            let html = `
            <html>
            <body>
            <ul>
           `
           let html2 = `
            </ul>
            </body>
            </html>
            `
            li.forEach(el=> (html += el))
            html += html2
            res.end(html)
        })
    }
        if(req.url == "/cityes" && req.method == "GET") {
            connection.query("select * from city", (err, rows, fields) => {
                let li = rows.map(el=>
                    `<li>${el.Name}}</li>`
                )
                let html = `
                <html>
                <body>
                <ul>
               `
               let html2 = `
                </ul>
                </body>
                </html>
                `
                let form = `
                <form action="/addmessage" method="POST">
                <input type="text" name="content">
                <input type="submit" value="SEND">
            </form>
                `
                li.forEach(el=> (html += el))
                html += html2
                html += form
                res.end(html)
            })
    }
    else if(req.url == "/addmessage" && req.method == "POST"){   
        let data = ""
        req.on("data", function(chunk){
            data += chunk
        })
        req.on("end", function(){
            console.log(data)
            let sp = new URLSearchParams(data)
            let content = sp.get("content")
            connection.query(`insert into city(Name) VALUES("${content}")`,
            function(err, result){
                console.log(err)
            res.writeHead(302, {Location: "/cityes"})
            res.end()
            }
        )
            
        })
    }
    else{
        res.statusCode = 404
        res.end("<h1>404</h1>");
    }
}).listen(3000, () => console.log("server started"));
