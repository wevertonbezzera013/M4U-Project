const express = require("express");
const bodyParser = require("body-parser");
const usuarioController = require("./controllers/usuario-controller");
const enderecoController = require("./controllers/endereco-controller");
const chipController = require("./controllers/chip-controller");
const cartaoController = require("./controllers/cartao-controller");
const bd = require("./infra/conexaoMysql");

const port = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

usuarioController(app, bd);
enderecoController(app, bd);
chipController(app, bd);
cartaoController(app, bd);

app.listen(port, () => console.log(`Listen on port ${port}`));
