const formulario = document.forms.registro;
const button = document.querySelector("#buttonFormCadastro");
const textoSenha = document.querySelector("#texto_senha");

formulario.addEventListener("submit", (e) => {
	e.preventDefault();
	const { senha, confirm_senha } = formulario;
	console.log(senha.value, confirm_senha.value);
	const result = userModel.checkPassword(senha, confirm_senha);

	if (result == false) {
		console.log("to aq");
	} else {
		userController.controllerUser();
	}
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
		};
		console.log(pessoa);
	}
	static checkPassword(password, confirmPassword) {
		console.log(confirmPassword, password);
		if (password.value !== confirmPassword.value) {
			confirmPassword.setCustomValidity("Senhas não coincidem");
			confirmPassword.reportValidity();
			setTimeout(() => {
				password.value = "";
				confirmPassword.value = "";
			}, 3000);
			return false;
		} else {
			confirmPassword.setCustomValidity("");
			return true;
		}
	}
}

/* button.addEventListener("click", (e) => {
	e.preventDefault();
	const { senha, senha1 } = formulario;
	const result = checkPassword(senha, senha1);

	if (result) {
		console.log("Senha iguais");
	} else {
		const { nome, email, cep, uf, cidade, rua, bairro, numero } = formulario;
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
		};
		console.log(pessoa);
	}
}); */

/* const { nome, email, cep, uf, cidade, endereco, senha } = form;
	const pessoa = {
		email: email.value,
		senha: senha.value,
		senha: senha.value,
	};
	console.log(pessoa);
	email.value = " ";
	senha.value = " ";
}); */
