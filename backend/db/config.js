const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user : "root",
    password: "",
    database : "React"
});


con.connect((err)=>{
    if(err)
    {
        console.warn("Connection Error!");
    }
});

module.exports = con;