const ChipDAO = require('../DAO/chip-dao')

module.exports = (app, bd) =>
{
    const chipDAO = new ChipDAO(bd);

    app.get('/chip', async (req, resp)=>{
        try{
            const verChip = await chipDAO.todosChips();
            resp.send(verChip);
        } catch {
            resp.send(erro);
        }
    });

    app.get('/chip/:id', async (req, resp)=>{
        let parametro = req.params.id;
        try{
            const verChipId = await chipDAO.filtroChip(parametro);
            resp.send(verChipId);
        } catch {
            resp.send(erro);
        }        
    });

    app.post('/chip', async (req, resp)=>{
        let parametro = [req.body.id_usuario, req.body.numero_chip];
        try{
            const inserirChip = await chipDAO.insereChip(parametro);
            resp.send(inserirChip);
        } catch {
            resp.send(erro);
        }    
    });

    app.delete('/chip/:id', async (req, resp)=>{
        let parametro = req.params.id;
        try{
            const deletarChip = await chipDAO.deletaChip(parametro);
            resp.send(deletarChip);
        } catch {
            resp.send(erro);
        }  
    });

    app.put('/usuario/:id', async (req, resp)=>{
        let parametro = [req.body.id_usuario, req.body.numero_chip, req.params.id];
        try{
            const atualizarChip = await chipDAO.atualizaChip(parametro);
            resp.send(atualizarChip);
        } catch {
            resp.send(erro);
        }
    });
};