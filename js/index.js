const botoes = document.querySelectorAll(".valores");

botoes.forEach((elemento) => {
	elemento.addEventListener("click", (e) => {
	
		window.localStorage.setItem("valor", e.target.textContent);
	  window.location.href = "../html/recarga.html";
		console.log(e.target.textContent);
	});
});
