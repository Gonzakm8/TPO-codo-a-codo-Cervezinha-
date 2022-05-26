const nombre = document.getElementById("name");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const advertencia = document.getElementById("advertencia");

advertencia.style.color = "red";

function enviarForm(){
    console.log("enviando formulario");

    let msjError= [];

    if(nombre.value===null || nombre.value=== ""){
        msjError.push('Ingrese un nombre')
    }

    if(email.value===null || email.value=== "" ) {
        msjError.push('Ingrese un email')
    }

    if(asunto.value===null || asunto.value=== ""){
        msjError.push('Ingrese un asunto')
    }
    advertencia.innerHTML = msjError.join(`<br>`);
    return false;
}