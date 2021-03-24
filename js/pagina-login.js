const botoes = document.querySelectorAll(".valores");
const form = document.forms.confirmacao_login;
const botao = document.querySelector("#buttonFormRecarga")
const nome = window.localStorage.getItem("nome");
console.log(typeof nome);

const nomeLogin = document.querySelector("#nome-usuario");
const nomeLoginNav = document.querySelector("#nome-userNav");

nomeLogin.innerHTML = `Olá ${nome}!` ;
nomeLoginNav.innerHTML = `Olá ${nome}!`;

botoes.forEach((elemento) => {
	elemento.addEventListener("click", (e) => {
    e.preventDefault();
    window.localStorage.setItem("valorSelecionado", e.target.textContent)
	});
});


form.addEventListener("submit", (e) => {
	e.preventDefault();
	const {
		titularCartao,
		numeroCartao,
		expiracao,
		cdSeguranca,
		numeroEasyC,
	} = form;

	const select = document.getElementById("bandeira_cartao");
	const value = select.options[select.selectedIndex].value;
  const valorClicado = window.localStorage.getItem("valorSelecionado");
	const valorInt = valorClicado.slice(2,5);

	const cartaoUser = {
		 "customer": { msisdn: parseInt("55" + numeroEasyC.value) },
		 "payment": {
			"type": "credit",
			"amount": parseInt(valorInt) ,
			"number": parseInt(numeroCartao.value),
			"holder": titularCartao.value,
			"expirationDate": parseInt(expiracao.value),
			"cvv": parseInt(cdSeguranca.value),
			"brand": value,
		},
	};

  console.log(cartaoUser);
   console.log(cartaoUser);
	const result = requisicaoCartao(cartaoUser)
	.then((response) =>{
	const {message, code} = response;
	verificaResponse(message, code, cartaoUser);
	})
	.catch((err)=>{
		console.log(err.message);
	}) 	
	
	
});

const verificaResponse = (mensagem, codigo,cartaoUser) =>{
	if(codigo == "EXPIREDDATE"){
		exibeModalNegCompra(mensagem);	
	}else if (codigo == "DENIED") {
		exibeModalNegCompra(mensagem);
	}else if (codigo == "INTERNAL") {
		exibeErroInterno(mensagem);
	}else if(codigo == "AUTHORIZED"){
		setTimeout(()=>{
			window.location.href = "../html/confirm-recarga.html"
		},3000);	
	}
}	

const exibeModalConfirmacao = () =>{
	  let elems = document.querySelector('#modal-confirm');
		let instances = M.Modal.init(elems);
		instances.open();
} 

const exibeModalNegCompra =(msg) =>{
    let elems = document.querySelector('#modal-compraNegada');
		let instances = M.Modal.init(elems);
		document.querySelector("#conteudo-modal-second-neg").innerHTML = `Poxa que triste, não podemos concluir a compra pois seu <b> ${msg.toUpperCase()} </b> Por favor entre em contato com o seu banco.`;
		instances.open();
}
const exibeErroInterno= (msg)=>{
		let elems = document.querySelector('#modal-compraNegada');
		let instances = M.Modal.init(elems);
		document.querySelector("#conteudo-modal-second-neg").innerHTML = `Poxa que triste, não podemos concluir a compra pois ocorreu um <b> ${msg.toUpperCase()} </b> Por favor entre em contato com o seu banco.`;
		instances.open();
}

const limpaCampos = () =>{
  const {
		titularCartao,
		numeroCartao,
		expiracao,
		cdSeguranca,
		numeroEasyC,
	} = form;
}

const requisicaoCartao = async (body) => {
  console.log("to no fetch")
	const response = await fetch("http://4r4z1.mocklab.io/v1/payment", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-type": "application/json",
			Authorization: "038aadaf-287d-4f1c-8e86-c23ec6ec1f58",
		},
		body: JSON.stringify(body),
		mode: "cors",
		cache: "default",
	});
	if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
	const responseJson = await response.json();
	return responseJson;
}