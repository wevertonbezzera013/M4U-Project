const cartaoUser = window.localStorage.getItem("cartaoFormulario");
const novoCartao = JSON.parse(cartaoUser);
const {customer, payment} = novoCartao;
const {expirationDate, number} = payment;
const msisdn = customer.msisdn.toString();
const closeModal = document.querySelector("#imagem-topo");



const cartao = document.getElementById("recarga_cartao");
const validade = document.getElementById("recarga_valid");

closeModal.addEventListener("click", (e)=>{
  let elems = document.querySelector('#modal-login');
	let instances = M.Modal.init(elems);
  instances.open();
})

const mascaraValidacao = (value, pattern) => {
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



cartao.innerHTML = mascaraNumeroCartao(number);
validade.innerHTML = mascaraValidacao(expirationDate, "##/##");
window.localStorage.removeItem("cartaoFormulario")