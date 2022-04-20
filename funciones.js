var textoEncriptado = ""

function rotarAside(){
    var contenedor = document.querySelector(".munieco-contenedor");
    contenedor.style.transform="rotateY(180deg)"
 }

 function volverAside(){
    var contenedor = document.querySelector(".munieco-contenedor");
    contenedor.style.transform="rotateY(0deg)"
    copiar.value = "Copiar";
 }

 function traspasarTexto(texto){
   var textoAsideAtras = document.querySelector(".p-atras")
    textoAsideAtras.innerHTML = texto;
 }


 function copiarTexto(){
    var textoAsideAtras = document.querySelector(".p-atras");
    var textArea = document.getElementById("area");
    textArea.value = textoAsideAtras.innerHTML;
    copiar.value = "Copiado!";
    copiar.style.color="darkturquoise";

 }

 function encriptarTexto(){
    var textArea = document.getElementById("area").value;
    if(textoEncriptado != textArea || textoEncriptado == ""){
        if(textArea.trim() != ""){
            rotarAside();
            traspasarTexto(agregarEncriptado(textArea));
            textoEncriptado = agregarEncriptado(textArea)
            }else{
                alert("debes ingresar el mensaje a encriptar");
                area.focus()
            }
    }else{
        alert("Este mensaje ya fue encriptado");
    }
 }

 function desencriptarTexto(){
    var textArea = document.getElementById("area").value;
    if(textArea.trim() != ""){
        rotarAside();
        traspasarTexto(quitarEncriptado(textArea));
        }else{
            alert("debes ingresar el mensaje a desencriptar");
            area.focus()
        }
        
 }


function agregarEncriptado(texto){
    var textos = "";
    textos = texto.replace(/a/g,"AI");
    textos = textos.replace(/e/g,"ENTER");
    textos = textos.replace(/i/g,"IMES");
    textos = textos.replace(/o/g,"OBER");
    textos = textos.replace(/u/g,"UFAT");
    textoEncriptado = textos;
    return textos.toLowerCase();
    
   

}


 function quitarEncriptado(texto){
    var textos = "";
    textos = texto.replace(/ai/g,"a");
    textos = textos.replace(/enter/g,"e");
    textos = textos.replace(/imes/g,"i");
    textos = textos.replace(/ober/g,"o");
    textos = textos.replace(/ufat/g,"u");
    return textos
 }

 