const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

// Conexão com o MySQL
const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'root',
    database        : 'easyc'
})

// Consulta todos os usários (GET)
app.get('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * FROM usuario', (err, rows) => {
            connection.release()

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
})

// Consulta o usuário por id (GET/ID)
app.get('/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * FROM usuario WHERE id_usuario = ?', [req.params.id], (err, rows) => {
            connection.release()

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
})

// Deleta o usuário por id (DELETE)
app.delete('/:id', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('DELETE FROM usuario WHERE id_usuario = ?', [req.params.id], (err, rows) => {
            connection.release()

            if(!err) {
                res.send(`O usuário cadastrado com o ID: ${[req.params.id]} foi removido`)
            } else {
                console.log(err)
            }
        })
    })
})

// Inclui um novo usuário (POST)
app.post('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const params = req.body

        connection.query('INSERT INTO usuario SET ?', params , (err, rows) => {
            connection.release()

            if(!err) {
                res.send(`Um novo usuário foi incluido`)
            } else {
                console.log(err)
            }
        })
    })
})

// Atualiza o e-mail de um usuário (PUT)
app.put('', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const {id_usuario, nome, email, senha} = req.body

        connection.query('UPDATE usuario SET email = ? WHERE id_usuario = ?', [email, id_usuario] , (err, rows) => {
            connection.release()

            if(!err) {
                res.send(`O e-mail do usuário de id ${id_usuario} foi alterado para ${email}`)
            } else {
                console.log(err)
            }
        })
    })
})

// Listen on enviroment port or 5000
app.listen(port, () => console.log(`Listen on port ${port}`))