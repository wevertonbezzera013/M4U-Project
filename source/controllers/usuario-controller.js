const UsuarioDAO = require('../dao/usuario-dao')

module.exports = (app, bd) =>
{
    const usuarioDAO = new UsuarioDAO(bd);

    app.get('/usuarios', async (req, resp)=>{
        try{
            const verUsuario = await usuarioDAO.todosUsuarios();
            resp.send(verUsuario);
        } catch {
            resp.send(erro);
        }
    });

    app.get('/usuarios/:id', async (req, resp)=>{
        let parametro = req.params.id;
        try{
            const verUsuarioId = await usuarioDAO.recuperaEmail(parametro);
            resp.send(verUsuarioId);
        } catch {
            resp.send(erro);
        }        
    });

    app.post('/usuarios', async (req, resp)=>{
        let parametro = [req.body.nome, req.body.email, req.body.senha];
        try{
            const inserirUsuario = await usuarioDAO.insereUsuario(parametro);
            resp.send(inserirUsuario);
        } catch {
            resp.send(erro);
        }    
    });

    app.delete('/usuario/:id', async (req, resp)=>{
        let parametro = req.params.id;
        try{
            const deletarUsuario = await usuarioDAO.deletaUsuario(parametro);
            resp.send(deletarUsuario);
        } catch {
            resp.send(erro);
        }  
    });

    app.put('/usuarios/:id', async (req, resp)=>{
        let parametro = [req.body.nome, req.body.email, req.body.senha, req.params.id];
        try{
            const atualizarUsuario = await usuarioDAO.atualizaUsuario(parametro);
            resp.send(atualizarUsuario);
        } catch {
            resp.send(erro);
        }
    });
};