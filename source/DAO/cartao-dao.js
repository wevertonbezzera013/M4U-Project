const con = require('../infra/conexaoMysql')

module.exports = class CartaoDAO
{
    constructor(bd)
    {
        this.bd = bd;
    }

    todosCartoes()
    {
        return new Promise((resolve, reject)=>{
            con.query('SELECT * FROM cartao_credito', (erro, linhas)=>{
                if(erro) reject('Não foi possível realizar a consulta');
                else resolve(linhas);
            });
        });
    }

    filtroCartao(parametro)
    {
        return new Promise((resolve, reject)=>{
            con.query('SELECT * FROM cartao_credito WHERE id_cartao = ?', parametro, (erro, linhas)=>{
                if(erro) reject('Não foi possível realizar a consulta por id');
                else resolve(linhas);
            });
        });
    }

    insereCartao(parametro)
    {
        return new Promise((resolve, reject)=>{
            con.query('INSERT INTO cartao_credito (id_usuario, numero_cartao, nome_titular, dt_validade, cd_seguranca, bandeira, tipo) VALUES (?, ?, ?, ?, ?, ?, ?)', 
            parametro, (erro, linhas)=>{
                if(erro) reject('Não foi possível inserir o cartão');
                else resolve('Cartão inserido');     
            });    
        });
    }

    deletaCartao(parametro)
    {
        return new Promise((resolve, reject)=>{
            con.query('DELETE FROM cartao_credito WHERE id_cartao = ?', parametro, (erro, linhas)=>{
                if(erro) reject('Não foi possível deletar o cartão');
                else resolve('Cartão deletado');  
            });
        });
    }

    /*
        atualizaCartao(parametro)
        {
            return new Promise((resolve, reject)=>{
                con.query('UPDATE cartao_credito SET id_cartao = ?, numero_cartao = ?, nome_titular = ?, dt_validade = ?, cd_seguranca = ?, bandeira = ?, tipo WHERE id_usuario = ?',
                parametro, (erro, linhas)=>{
                    if(erro) reject('Não foi possível atualizar o usuario');
                    else resolve('Usuário atualizado');           
                });
            });
        }
    */
}