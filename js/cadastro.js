const formulario = document.forms.registro;
const button = document.querySelector("#buttonFormCadastro");
const textoSenha = document.querySelector("#texto_senha");
const cartaoExpiracao = document.querySelector("#cartao_expiracao");


formulario.addEventListener("submit", (e) => {
	e.preventDefault();
	const {
		titularCartao,
		numeroCartao,
		expiracao,
		cdSeguranca,
		numeroEasyC,
	} = formulario;

	const select = document.getElementById("bandeira_cartao");
  const value = select.options[select.selectedIndex].value;


	const cartaoUserCadastro = {
		"customer": { msisdn: parseInt("55999055744") },
		"payment": {
			"type": "credit",
			"amount": 1000,
			"number": parseInt(numeroCartao.value),
			"holder": titularCartao.value,
			"expirationDate": parseInt(expiracao.value),
			"cvv": parseInt(cdSeguranca.value),
			"brand": value,
		},
	};
	 
	const { senha, confirm_senha } = formulario;

	const result = userModel.checkPassword(senha, confirm_senha);
	if (!result) {
	} else {
		console.log("aaaa");
		console.log(cartaoUserCadastro)
		requisicaoCartao(cartaoUserCadastro)
		.then((response) =>{
			console.log(response)
			const {message, code} = response;
	    verificaResponse(message, code, cartaoUserCadastro);
			})
		.catch((err)=>{
			console.log(err.message);
			})
	}
});
		/* userController.controllerUser();
		window.location.href = "../html/confirm-chip.html"*/

		const verificaResponse = (mensagem, codigo,cartaoUserCadastro) =>{
			if(codigo == "EXPIREDDATE"){
				exibeModalNegCompra(mensagem);	
			}else if (codigo == "DENIED") {
				exibeModalNegCompra(mensagem);
			}else if (codigo == "INTERNAL") {
				exibeErroInterno(mensagem);
			}else {
				setTimeout(()=>{
					window.localStorage.setItem("cartaoFormulario", JSON.stringify(cartaoUserCadastro));
					window.location.href = "../html/confirm-chip.html";
				},3000)
				
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

class userController {
	static controllerUser() {
		userModel.modelaUsuario();
	}
}

class userModel {
	static modelaUsuario() {
		const {
			email,
			senha,
			nome,
			cep,
			uf,
			cidade,
			rua,
			bairro,
			numero,
		} = formulario;

		const pessoa = {
			email: email.value,
			nome: nome.value,
			senha: senha.value,
			cep: cep.value.replace("-", ""),
			uf: uf.value,
			cidade: cidade.value,
			rua: rua.value,
			bairro: bairro.value,
			numero: numero.value,
			numeroTelefone: "+55" + sorteiaNumero(),
		};
		console.log(pessoa);
	}
	static checkPassword(password, confirmPassword) {
		console.log(confirmPassword, password);
		if (password.value !== confirmPassword.value) {
			confirmPassword.setCustomValidity("Senhas não coincidem");
			confirmPassword.reportValidity();
			password.value ="";
			confirmPassword.value= "";
			return false;
		} else {
			confirmPassword.setCustomValidity("");
			return true;
		}
	}
}

let arrayNumerosTelefonicos = ["21999994596", "219658485962"];
const mascaraNumero = (value, pattern) => {
	let i = 0;
	const v = value.toString();
	return pattern.replace(/#/g, () => v[i++] || "");
};

const sorteiaNumero = () => {
	const numeroSorteado = arrayNumerosTelefonicos[0];
	arrayNumerosTelefonicos = arrayNumerosTelefonicos.splice(0, 1);
	console.log("Array" + arrayNumerosTelefonicos);
	//const mascara = mascaraNumero(numeroSorteado, "(##)#####-####");
	return numeroSorteado;
};

const mascaraValidacao = (value, pattern) => {
	let i = 0;
	const v = value.toString();
	return pattern.replace(/#/g, () => v[i++] || "");
};


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
	console.log("to no fetch")
	return responseJson;
}