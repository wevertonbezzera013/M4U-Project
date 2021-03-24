const form = document.forms.autenticacao;
const {email, senha} = form;


const requisicaoBanco = async (user) =>{
  const response = await fetch(`https://easyc-bd.herokuapp.com/usuario/${user.email}`, {
  method: "GET",
  headers: { Accept: "application/json", "Content-Type": "application/json" },
  //body: JSON.stringify(user),
  mode: "cors",
  cache: "default",
})
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const responseJson = await response.json();
  console.log("to no fetch");
  return responseJson;
}
const checkLogin = (usuario) =>{
  if (usuario.length > 0 && usuario[0].senha == senha.value) {
     window.localStorage.setItem("nome",usuario[0].nome);
     window.location.href = "./paginaLogin.html"
  }else {
  const textoLogin = document.querySelector("#info_login");
  textoLogin.innerHTML = "Usuário ou senha incorretos!"
  setTimeout(() => {
    senha.value = "";
    textoLogin.innerHTML = "";
  }, 2000);
  }

}

form.addEventListener("submit", (e) =>{
  e.preventDefault();
  const user ={
    email: email.value,
    senha: senha.value
  }
  requisicaoBanco(user)
  .then((data) => {
    checkLogin(data); 
  })
  .catch((err) => {
    console.log(err);
  });
});


  





