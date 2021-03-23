/* const form = document.forms.autenticacao;

form.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log("oin");

	const { email, senha } = form;
	const pessoa = {
		email: email.value,
		senha: senha.value,
	};
	checkLogin(pessoa);
	console.log(pessoa);
	email.value = " ";
	senha.value = " ";
});

const checkLogin = async (pessoa) => {
	const user = await fetch("", {
		method: "POST",
		headers: { Accept: "application/json", "Content-Type": "application/json" },
		body: JSON.stringify(pessoa),
		mode: "cors",
		cache: "default",
	})
		.then((data) => data.json())
		.then((row) => {
			console.log(row);
		})
		.catch((err) => {
			console.log(err);
		});
}; */
/* window.localStorage.removeItem("user"); */
/* console.log(window.localStorage.getItem("user"));*/
console.log(window.localStorage.getItem("novoUser"));
