const mysql = require('mysql2')

const con = mysql.createConnection({
    host            : 'localhost',
    user            : 'root',
    password        : 'root',
    database        : 'easyc'
})

con.connect((err) =>{
    if (err) {
        console.log('Erro de conexão com o banco de dados...', err)
        return
    }
    console.log('Conexão estabelecida')
})

module.exports = con;