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
        alert(quitarEncriptado(textArea))
 }

 function agregarEncriptado(texto){
     var textos = "";
    for(var i = 0; i < texto.length ; i++){
        if(texto.charAt(i) == "a"){
            textos += texto.charAt(i) + "i"; 
        }
        else if(texto.charAt(i) == "e"){
            textos += texto.charAt(i) + "nter"; 
        }
        else if(texto.charAt(i) == "i"){
            textos += texto.charAt(i) + "mes"; 
        }
        else if(texto.charAt(i) == "o"){
            textos += texto.charAt(i) + "ber"; 
        }
        else if(texto.charAt(i) == "u"){
            textos += texto.charAt(i) + "fat"; 
        }
        else{textos += texto.charAt(i);
        }
    }
    return textos
 }

 function quitarEncriptado(texto){
    var textos = "";
   for(var i = 0; i < texto.length ; i++){
       if(texto.charAt(i) == "a"){
           textos += "a"
        //    texto.charAt(i+1) = "";
       }
       else if(texto.charAt(i) == "e"){
           textos += "e"
        //    texto.charAt(i+1) = "";
        //    texto.charAt(i+2) = "";
        //    texto.charAt(i+3) = "";
        //    texto.charAt(i+4) = "";
       }
       else if(texto.charAt(i) == "i"){
           textos += "i"
        //    texto.charAt(i+1) = "";
        //    texto.charAt(i+2) = "";
        //    texto.charAt(i+3) = "";
       }
       else if(texto.charAt(i) == "o"){
           textos += "o"
        //    texto.charAt(i+1) = "";
        //    texto.charAt(i+2) = "";
        //    texto.charAt(i+3) = "";
       }
       else if(texto.charAt(i) == "u"){
           textos += "u"
    //        texto.charAt(i+1) = "";
    //        texto.charAt(i+2) = "";
    //        texto.charAt(i+3) = "";
       }
       else{
           textos += texto.charAt(i);
       }
   }


   alert("hola")
   return textos;
}

 