const formulario = document.forms.registro;
const button = document.querySelector("#buttonFormCadastro");
const textoSenha = document.querySelector("#texto_senha");
const cartaoExpiracao = document.querySelector("#cartao_expiracao");

button.addEventListener("click", (e) => {
	e.preventDefault();
	const { senha, confirm_senha } = formulario;
	const result = userModel.checkPassword(senha, confirm_senha);

	if (!result) {
		console.log("to aq");
	} else {
		userController.controllerUser();
	}
});

cartaoExpiracao.addEventListener("blur", () => {
	const validation = mascaraValidacao(cartaoExpiracao.value, "##/##");
	cartaoExpiracao.value = validation;
});

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
