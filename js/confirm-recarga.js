
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
	let i = 0;
	const v = value.toString();
	return pattern.replace(/#/g, () => v[i++] || "");
};
 const mascaraNumero = (value, pattern) => {
	let i = 0;
	const v = value.toString();
	return pattern.replace(/#/g, () => v[i++] || "");
}; 


const mascaraNumeroCartao =(number)=>{
	const string = number.toString();
	const arrayNovo = [];
	let cartaoFormatado ="";

for (let i=0 ; i< string.length; i++) {
  arrayNovo[i] = parseInt(string[i]);
}
console.log(arrayNovo)

for (let i = 0; i <arrayNovo.length; i++){
  if(i > 3 && i <12){
    console.log("aqui")
    cartaoFormatado += "x";
  }
  else {
    cartaoFormatado += arrayNovo[i];
  }
} 
return cartaoFormatado;
}

recarga.innerHTML = valor;
telefone.innerHTML = mascaraNumero(msisdn.slice(2, 13), "(##)#####-####");
cartao.innerHTML = mascaraNumeroCartao(number);
validade.innerHTML = mascaraValidacao(expirationDate, "##/##");
window.localStorage.removeItem("valor");
window.localStorage.removeItem("cartao");
