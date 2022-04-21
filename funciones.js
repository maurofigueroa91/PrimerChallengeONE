var textoEncriptado = ""
var tituloAside = document.getElementById("tituloAsideAtras");

function encriptarTexto(){
   var textArea = document.getElementById("area").value;

   if(textoEncriptado != textArea || textoEncriptado == ""){
       if(textArea.trim() != ""){
           rotarAside();
           traspasarTexto(agregarEncriptado(textArea));
           textoEncriptado = agregarEncriptado(textArea)
           tituloAside.innerHTML = "Mensaje Encriptado:"
           }else{
               swal("Un momento!","Debes ingresar el mensaje a encriptar.","error");
               area.focus()
           }
   }else{
       swal("Un momento!","Este mensaje ya fue encriptado", "warning");
   }
}

function desencriptarTexto(){
   var textArea = document.getElementById("area").value;

   if(textArea.trim() != ""){
       rotarAside();
       traspasarTexto(quitarEncriptado(textArea));
       tituloAside.innerHTML = "Mensaje Desencriptado:"
       }else{
           swal("Un momento!", "debes ingresar el mensaje a desencriptar.", "warning");
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
    swal("Mensaje copiado!", "El mensaje fue copiado y está listo para desencriptar.", "success");
 }

 function limpiarArea(){
    document.getElementById("area").value = "";
 }











 