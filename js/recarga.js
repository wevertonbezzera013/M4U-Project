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
	console.log(cartaoUser);
	response(cartaoUser);
	window.localStorage.setItem("cartao", JSON.stringify(cartaoUser));
	window.location.href = "../html/confirm-recarga.html"; 
	console.log(window.localStorage.getItem("valor"));
});

const response = async (body) =>
	await fetch("http://4r4z1.mocklab.io/v1/payment", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-type": "application/json",
			Authorization: "038aadaf-287d-4f1c-8e86-c23ec6ec1f58",
		},
		body: JSON.stringify(body),
		mode: "cors",
		cache: "default",
	})
		.then((data) => {
			return data.json();
		})
		.then((response) => {
			console.log(response);
		})
		.catch((err) => {
			console.log(err);
		});
