console.log("M4U");

const cartaoUser = window.localStorage.getItem("cartao");
const valor = window.localStorage.getItem("valor");

const recarga = document.getElementById("recarga");
const telefone = document.getElementById("numero_telefone");
const cartao = document.getElementById("cartao_numero");
const validade = document.getElementById("validade_cartao");

const { numeroCartao, expiracao, msisdn } = JSON.parse(cartaoUser);

const mascaraValidacao = (value, pattern) => {
	console.log("oi");
	let i = 0;
	const v = value.toString();
	return pattern.replace(/#/g, () => v[i++] || "");
};
const mascaraNumero = (value, pattern) => {
	let i = 0;
	const v = value.toString();
	return pattern.replace(/#/g, () => v[i++] || "");
};

recarga.innerHTML = valor;
telefone.innerHTML = mascaraNumero(msisdn.slice(2, 13), "(##)#####-####");
cartao.innerHTML = numeroCartao;
validade.innerHTML = mascaraValidacao(expiracao, "##/##");
