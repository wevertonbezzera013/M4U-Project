# CREATE DATABASE easyc;
# USE easyc;
DROP TABLE endereco;
# -------------------------------------------------------------
# CRIAÇÃO DA TABELA DE USUÁRIOS
# -------------------------------------------------------------
CREATE TABLE `usuario` (
	  `id_usuario` INT AUTO_INCREMENT PRIMARY KEY
    , `nome` VARCHAR(255) NOT NULL
    , `email` VARCHAR(255) NOT NULL
    , `senha` VARCHAR(30) NOT NULL
);

# -------------------------------------------------------------
# CRIAÇÃO DA TABELA DE ENDEREÇOS
# -------------------------------------------------------------
CREATE TABLE `endereco` (
	  `id_endereco` INT AUTO_INCREMENT PRIMARY KEY
	, `id_usuario` INT
    , `logradouro` VARCHAR(255)
    , `numero` VARCHAR(30)
    , `complemento` VARCHAR(60)
    , `cidade` VARCHAR(100)
    , `uf` VARCHAR(2)
    , `cep` VARCHAR(8)
    , FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

# -------------------------------------------------------------
# CRIAÇÃO DA TABELA DE CARTÕES DE CRÉDITO
# -------------------------------------------------------------
CREATE TABLE `cartao_credito` (
	   `id_cartao` INT AUTO_INCREMENT PRIMARY KEY
     , `id_usuario` INT
	 , `numero_cartao` VARCHAR(16)
     , `nome_proprietario` VARCHAR(255)
     , `dt_validade` VARCHAR(4)
     , `cd_seguranca` VARCHAR(3)
     , `bandeira` VARCHAR(10)
     , `tipo` VARCHAR(6)
     , FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

# -------------------------------------------------------------
# CRIAÇÃO DA TABELA DE CHIPS
# -------------------------------------------------------------
CREATE TABLE `chip` (
	  `id_chip` INT AUTO_INCREMENT PRIMARY KEY
	, `id_usuario` INT
    , `numero_chip` VARCHAR(13)
    , FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
)