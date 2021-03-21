const con = require('../infra/conexaoMysql')

module.exports = class UsuarioDAO
{
    constructor(bd)
    {
        this.bd = bd;
    }

    todosChips()
    {
        return new Promise((resolve, reject)=>{
            con.query('SELECT * FROM chip', (erro, linhas)=>{
                if(erro) reject('Não foi possível realizar a consulta');
                else resolve(linhas);
            });
        });
    }

    filtroChip(parametro)
    {
        return new Promise((resolve, reject)=>{
            con.query('SELECT * FROM chip WHERE id_usuario = ?', parametro, (erro, linhas)=>{
                if(erro) reject('Não foi possível realizar a consulta por id');
                else resolve(linhas);
            });
        });
    }

    insereChip(parametro)
    {
        return new Promise((resolve, reject)=>{
            con.query('INSERT INTO chip (id_usuario, numero_chip) VALUES (?, ?)', parametro, (erro, linhas)=>{
                if(erro) reject('Não foi possível inserir o chip');
                else resolve('Chip inserido');     
            });    
        });
    }

    deletaChip(parametro)
    {
        return new Promise((resolve, reject)=>{
            con.query('DELETE FROM chip WHERE id_usuario = ?', parametro, (erro, linhas)=>{
                if(erro) reject('Não foi possível deletar o chip');
                else resolve('Chip deletado');  
            });
        });
    }

    atualizaChip(parametro)
    {
        return new Promise((resolve, reject)=>{
            con.query('UPDATE chip SET numero_chip = ? WHERE id_usuario = ?', parametro, (erro, linhas)=>{
                if(erro) reject('Não foi possível atualizar o chip');
                else resolve('Chip atualizado');           
            });
        });
    }
}