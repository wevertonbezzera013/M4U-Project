const form = document.forms.autenticacao;

const arrayTeste = ["juliete@gmail", "1234"];

const { email, senha } = form;

const buttonLogin = document.querySelector("#button-login");

buttonLogin.addEventListener("click", (e) => {
	e.preventDefault();
	const emailVerificar = email.value;
	const senhaVerificar = senha.value;
	/* formaBody(emailVerificar, senhaVerificar); */
	/* const result = checkLogin();
	console.log(result); */

	/* async function result() {
		const resultado = await checkLogin();
		return resultado;
	}
	console.log(result()); */
	if (senhaVerificar == "1234") {
		checkLogin();
		setTimeout(() => {
			window.location.href = "./index.html";
		}, 5000);
	}
});
/* if (email.value == arrayTeste[0] && senha.value == arrayTeste[1]) {
		alert("Usuario identificado");
		window.location.href = "./index.html";
	} else {
		alert("usuario informado incorretamente");
		console.log(email.value, senha.value);
		console.log(arrayTeste);
		email.value = "";
		senha.value = "";
	} */

/* const formaBody = (emailN, senhaN) => {
	const body = {
		NOME: ""
		EMAIL: emailN,
		SENHA: senhaN,
	};
	return checkLogin(body);
};
 */
const checkLogin = async () => {
	const user = await fetch(
		`https://agile-plateau-70677.herokuapp.com/usuario/${2}`,
		{
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			/* 	body: JSON.stringify(infosLogins), */
			mode: "cors",
			cache: "default",
		}
	)
		.then((data) => data.json())
		.then((usuario) => {
			window.localStorage.setItem("novoUser", JSON.stringify(usuario));
		})
		.catch((err) => {
			console.log(err);
		});
};
