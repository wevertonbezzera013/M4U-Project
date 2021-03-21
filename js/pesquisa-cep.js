const cep = document.querySelector("#cep");

cep.addEventListener("blur", () => {
	const search = cep.value.replace("-", "");
	Controller.pesquisaCep(search);
});

const options = {
	method: "GET",
	mode: "cors",
	cache: "default",
};

class Controller {
	static pesquisaCep(cep) {
		fetch(`https://viacep.com.br/ws/${cep}/json/`, options)
			.then((response) => {
				return response.json();
			})
			.then((dados) => {
				Model.processaDados(dados);
			})
			.catch((err) => {
				console.log(err);
			});
	}
}

class Model {
	static processaDados(dados) {
		for (let campo in dados) {
			if (document.querySelector("#" + campo)) {
				console.log(campo);
				document.querySelector("#" + campo).value = dados[campo];
			}
		}
	}
}
