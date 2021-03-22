const mysql = require('mysql2')

const con = mysql.createConnection({
    host            : 'g84t6zfpijzwx08q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user            : 'a5lxbz0wu0rwxke5',
    password        : 'lgh8i13f1lisxerq',
    database        : 'ulhn77u0d96yeku8'
})

con.connect((err) =>{
    if (err) {
        console.log('Erro de conexão com o banco de dados...', err)
        return
    }
    console.log('Conexão estabelecida')
})

module.exports = con;