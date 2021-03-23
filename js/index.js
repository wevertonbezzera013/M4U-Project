const botoes = document.querySelectorAll(".buttonValoresRecarga")

botoes.forEach((elemento)=>{
    elemento.addEventListener("click", (e)=>{
        e.stopPropagation()
        window.localStorage.setItem("valor", JSON.stringify(e.target.textContent))
        window.location.href='../html/recarga.html'
        console.log(e.target.textContent)
    })
})