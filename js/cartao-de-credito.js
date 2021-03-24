const form = document.forms.autenticacao;

const arrayTeste = ["juliete@gmail", "1234"];

const { email, senha } = form;

const buttonLogin = document.querySelector("#button-login");

buttonLogin.addEventListener("click", (e) => {
	e.preventDefault();
	const emailVerificar = email.value;
	const senhaVerificar = senha.value;
	if (senhaVerificar == "1234") {
		checkLogin();
		setTimeout(() => {
			window.location.href = "./index.html";
		}, 5000);
	}
});
const checkLogin = async () => {
	const user = await fetch(
		`https://agile-plateau-70677.herokuapp.com/usuario/${2}`,
		{
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
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
