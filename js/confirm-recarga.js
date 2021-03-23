
const cartaoUser = window.localStorage.getItem("cartao");
const valor = window.localStorage.getItem("valor");
const novoCartao = JSON.parse(cartaoUser);
const {customer, payment} = novoCartao;
const {expirationDate, number} = payment;
const msisdn = customer.msisdn.toString();


const recarga = document.getElementById("recarga");
const telefone = document.getElementById("numero_telefone");
const cartao = document.getElementById("cartao_numero");
const validade = document.getElementById("validade_cartao");


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
cartao.innerHTML = number;
validade.innerHTML = mascaraValidacao(expirationDate, "##/##");
