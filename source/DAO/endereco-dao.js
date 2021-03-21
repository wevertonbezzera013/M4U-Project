const con = require('../infra/conexaoMysql')

module.exports = class EnderecoDAO
{
    constructor(bd)
    {
        this.bd = bd;
    }

    todosEnderecos()
    {
        return new Promise((resolve, reject)=>{
            con.query('SELECT * FROM endereco', (erro, linhas)=>{
                if(erro) reject('Não foi possível realizar a consulta');
                else resolve(linhas);
            });
        });
    }

    filtroEndereco(parametro)
    {
        return new Promise((resolve, reject)=>{
            con.query('SELECT * FROM endereco WHERE id_usuario = ?', parametro, (erro, linhas)=>{
                if(erro) reject('Não foi possível realizar a consulta por id');
                else resolve(linhas);
            });
        });
    }

    insereEndereco(parametro)
    {
        return new Promise((resolve, reject)=>{
            con.query('INSERT INTO endereco (id_usuario, logradouro, numero, complemento, cidade, uf, cep) VALUES (?, ?, ?, ?, ?, ?, ?)', 
            parametro, (erro, linhas)=>{
                if(erro) reject('Não foi possível inserir o endereço');
                else resolve('Endereço inserido');     
            });    
        });
    }

    deletaEndereco(parametro)
    {
        return new Promise((resolve, reject)=>{
            con.query('DELETE FROM endereco WHERE id_usuario = ?', parametro, (erro, linhas)=>{
                if(erro) reject('Não foi possível deletar o endereço');
                else resolve('Endereço deletado');  
            });
        });
    }

    atualizaEndereco(parametro)
    {
        return new Promise((resolve, reject)=>{
            con.query('UPDATE endereco SET logradouro = ?, numero = ?, complemento = ?, cidade = ?, uf = ?, cep = ? WHERE id_usuario = ?', 
            parametro, (erro, linhas)=>{
                if(erro) reject('Não foi possível atualizar o endereço');
                else resolve('Endereço atualizado');           
            });
        });
    }
}