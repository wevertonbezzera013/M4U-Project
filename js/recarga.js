const form = document.forms.registro_recarga;
const valor = window.localStorage.getItem("valor");
const valorInt = valor.slice(2,5);

const botaoClick = document.querySelector("#buttonFormRecarga");

botaoClick.addEventListener("click", (e) => {
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
	console.log(valorInt)

	const cartaoUser = {
		"customer": { msisdn: parseInt("55" + numeroEasyC.value) },
		"payment": {
			"type": "credit",
			"amount": parseInt(valorInt),
			"number": parseInt(numeroCartao.value),
			"holder": titularCartao.value,
			"expirationDate": parseInt(expiracao.value),
			"cvv": parseInt(cdSeguranca.value),
			"brand": value,
		},
	};
	const result = requisicaoCartao(cartaoUser)
	.then((response) =>{
	 const {message, code} = response;
	 verificaResponse(message, code, cartaoUser);

	})
	.catch((err)=>{
		console.log(err.message);
	})		
	//window.location.href = "../html/confirm-recarga.html"; 
	
});

const verificaResponse = (mensagem, codigo,cartaoUser) =>{
	if(codigo == "EXPIREDDATE"){
		exibeModalNegCompra(mensagem);	
	}else if (codigo == "DENIED") {
		exibeModalNegCompra(mensagem);
	}else if (codigo == "INTERNAL") {
		exibeErroInterno(mensagem);
	}else {
		setTimeout(()=>{
			window.localStorage.setItem("cartao", JSON.stringify(cartaoUser));
	    window.location.href = "../html/confirm-recarga.html";
		},3000)
		
	}
}	

const exibeModalConfirmacao = (msg) =>{
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

const requisicaoCartao = async (body) => {
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
	
		/* .then((data) => {
			return data.json();
		})
		.then((response) => {
			return response;
		})
		.catch((err) => {
			console.log(err); */
	//	});
