//NAV
const nav = document.querySelector('.nav');

     window.addEventListener('scroll', function(){
         nav.classList.toggle('active', window.scrollY >0)
});

// VALIDACIÓN-CONTACTO
const nombre = document.getElementById("name")
const email = document.getElementById("email")

FormData.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""

    if(nombre.value.length < 5){
        warnings += `El nombre no es valido`
        entrar = true
    }

    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido`
        entrar = true
    }

    if (entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})

