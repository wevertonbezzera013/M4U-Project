const EnderecoDAO = require('../dao/endereco-dao')

module.exports = (app, bd) =>
{
    const enderecoDAO = new EnderecoDAO(bd);

    app.get('/endereco', async (req, resp)=>{
        try{
            const verEndereco = await enderecoDAO.todosEnderecos();
            resp.send(verEndereco);
        } catch {
            resp.send(erro);
        }
    });

    app.get('/endereco/:id', async (req, resp)=>{
        let parametro = req.params.id;
        try{
            const verEnderecoId = await enderecoDAO.filtroEndereco(parametro);
            resp.send(verEnderecoId);
        } catch {
            resp.send(erro);
        }        
    });

    app.post('/endereco', async (req, resp)=>{
        let parametro = [req.body.id_usuario, req.body.logradouro, req.body.numero, req.body.complemento, 
                         req.body.cidade, req.body.uf, req.body.cep];
        try{
            const inserirEndereco = await enderecoDAO.insereEndereco(parametro);
            resp.send(inserirEndereco);
        } catch {
            resp.send(erro);
        }    
    });

    app.delete('/endereco/:id', async (req, resp)=>{
        let parametro = req.params.id;
        try{
            const deletarEndereco = await enderecoDAO.deletaEndereco(parametro);
            resp.send(deletarEndereco);
        } catch {
            resp.send(erro);
        }  
    });

    /*
        app.put('/endereco/:id', async (req, resp)=>{
            let parametro = [req.body.id_usuario, req.body.logradouro, req.body.numero, req.body.complemento, 
                            req.body.cidade, req.body.uf, req.body.cep, req.params.id];
            try{
                const atualizarEndereco = await enderecoDAO.atualizaEndereco(parametro);
                resp.send(atualizarEndereco);
            } catch {
                resp.send(erro);
            }
        });
    */
};