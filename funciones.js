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

   for(var i = 0; i < texto.length; i++){
      if(texto[i] == "a"){
         textos += "ai";
      }
      else if(texto[i] == "e"){
         textos += "enter";
      }
      else if(texto[i] == "i"){
         textos += "imes";
      }
      else if(texto[i] == "o"){
         textos += "ober";
      }
      else if(texto[i] == "u"){
         textos += "ufat";
      }
      else{
         textos += texto[i];
      }
   }

   return textos.toLowerCase();
}

function quitarEncriptado(texto){
   var textos = "";

   for(var i = 0; i < texto.length; i++){
      if(texto[i] == "a"){
         textos += "a";
         i = i+1;
      }
      else if(texto[i] == "e"){
         textos += "e";
         i += 4;
      }
      else if(texto[i] == "i"){
         textos += "i";
         i+= 3;
      }
      else if(texto[i] == "o"){
         textos += "o";
         i+=3;
      }
      else if(texto[i] == "u"){
         textos += "u";
         i+=3;
      }
      else{
         textos += texto[i];
      }
   }

   return textos.toLowerCase();
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
    navigator.clipboard.writeText(textoAsideAtras.innerHTML);
    copiar.value = "Copiado!";
    copiar.style.color="darkturquoise";
    swal("Mensaje copiado!", "El mensaje fue copiado y está listo para desencriptar.", "success");
 }

 function limpiarArea(){
    document.getElementById("area").value = "";
 }











 