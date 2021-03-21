const con = require('../infra/conexaoMysql')

module.exports = class UsuarioDAO
{
    constructor(bd)
    {
        this.bd = bd;
    }

    todosUsuarios()
    {
        return new Promise((resolve, reject)=>{
            con.query('SELECT * FROM usuario', (erro, linhas)=>{
                if(erro) reject('Não foi possível realizar a consulta');
                else resolve(linhas);
            });
        });
    }

    filtroUsuario(parametro)
    {
        return new Promise((resolve, reject)=>{
            con.query('SELECT * FROM usuario WHERE id_usuario = ?', parametro, (erro, linhas)=>{
                if(erro) reject('Não foi possível realizar a consulta por id');
                else resolve(linhas);
            });
        });
    }

    insereUsuario(parametro)
    {
        return new Promise((resolve, reject)=>{
            con.query('INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)', parametro, (erro, linhas)=>{
                if(erro) reject('Não foi possível inserir o usuario');
                else resolve('Usuário inserido');     
            });    
        });
    }

    deletaUsuario(parametro)
    {
        return new Promise((resolve, reject)=>{
            con.query('DELETE FROM usuario WHERE id_usuario = ?', parametro, (erro, linhas)=>{
                if(erro) reject('Não foi possível deletar o usuário');
                else resolve('Usuário deletado');  
            });
        });
    }

    atualizaUsuario(parametro)
    {
        return new Promise((resolve, reject)=>{
            con.query('UPDATE usuario SET nome = ?, email = ?, senha = ? WHERE id_usuario = ?', parametro, (erro, linhas)=>{
                if(erro) reject('Não foi possível atualizar o usuario');
                else resolve('Usuário atualizado');           
            });
        });
    }
}