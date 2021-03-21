const CartaoDAO = require('../DAO/cartao-dao')

module.exports = (app, bd) =>
{
    const cartaoDAO = new CartaoDAO(bd);

    app.get('/cartao', async (req, resp)=>{
        try{
            const verCartao = await cartaoDAO.todosCartoes();
            resp.send(verCartao);
        } catch {
            resp.send(erro);
        }
    });

    app.get('/cartao/:id', async (req, resp)=>{
        let parametro = req.params.id;
        try{
            const verCartaoId = await cartaoDAO.filtroCartao(parametro);
            resp.send(verCartaoId);
        } catch {
            resp.send(erro);
        }        
    });

    app.post('/cartao', async (req, resp)=>{
        let parametro = [req.body.id_usuario, req.body.numero_cartao, req.body.nome_proprietario, 
                         req.body.dt_validade, req.body.cd_seguranca, req.body.bandeira, req.body.tipo];
        try{
            const inserirCartao = await cartaoDAO.insereCartao(parametro);
            resp.send(inserirCartao);
        } catch {
            resp.send(erro);
        }    
    });

    app.delete('/cartao/:id', async (req, resp)=>{
        let parametro = req.params.id;
        try{
            const deletarCartao = await cartaoDAO.deletaCartao(parametro);
            resp.send(deletarCartao);
        } catch {
            resp.send(erro);
        }  
    });

    app.put('/cartao/:id', async (req, resp)=>{
        let parametro = [req.body.id_usuario, req.body.numero_cartao, req.body.nome_proprietario, 
                         req.body.dt_validade, req.body.cd_seguranca, req.body.bandeira, req.body.tipo, req.params.id];
        try{
            const atualizarCartao = await cartaoDAO.atualizaCartao(parametro);
            resp.send(atualizarCartao);
        } catch {
            resp.send(erro);
        }
    });
};