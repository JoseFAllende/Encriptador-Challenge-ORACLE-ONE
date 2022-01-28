//Variables-----------------------------------------------------------------------------------------------------------
var formulario=document.querySelector("#formulario")
var textInput= document.querySelector("#input-texto");
var btnEncriptar = document.querySelector('#btn-encriptar');
var btnCopiar=document.querySelector('#btn-copy');
var btnDesencriptar=document.querySelector("#btn-desencriptar")
var textOutput= document.querySelector("#msg");
var textoValido=false;

//Validación de Texto--------------------------------------------------------------------------------------------------
//Función ValidarTexto(). Detecta en el texto todos los caracteres que NO sean de la a-z minúscula. Se entiende que son
//Mayúsculas, vocales con acento, números y caracteres especiales.

function validarTexto() {
   
   if(textInput.value==""){
        alert("Ingrese un texto por favor")

   }
    if ((/[^a-z]/.test(textInput.value)) && (textInput.value==""))  {
        
        alert("Su texto No debe contener números, mayúsculas,acentos, caracteres especiales");
        
    } else{
        //console.log(textInput.value);
        textoValido=true;
    }
    
    
}

//Encriptar Texto-------------------------------------------------------------------------------------------------------
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/
function encriptar() {
    var textoIngresado=textInput.value;
    validarTexto();

    if (textoValido==true){
      
      var textoEncriptado = textoIngresado.replace(/e/g,"enter");
      var textoEncriptado = textoEncriptado.replace(/i/g,"imes");
      var textoEncriptado = textoEncriptado.replace(/a/g,"ai");
      var textoEncriptado = textoEncriptado.replace(/o/g,"ober");
      var textoEncriptado = textoEncriptado.replace(/u/g,"ufat");

      document.querySelector("#msg").value = textoEncriptado;
      document.querySelector("#input-texto").value = '';//Limpia el input-texto

    //   var titulo = document.querySelector("h2");
    //   titulo.textContent="Mensaje Encriptado:";

    // alert("Mensaje Encriptado!");

    } 
}
//Copiar---------------------------------------------------------------------------------------------------------------
//Copia el contenido encriptado en el portapapeles
function copiar() {
    var textoCopiado = document.querySelector("#msg");
    textoCopiado.select();
    navigator.clipboard.writeText(textoCopiado.value);
    alert("Mensaje Copiado:");
    
}
//Desencriptar-------------------------------------------------------------------------------------------------------------------------------
/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
function desencriptar() {

    var textoIngresado = document.querySelector("#input-texto").value;

    validarTexto();

    if (textoValido==true){

        var textoDesencriptado = textoIngresado.replace(/enter/g, "e")
        var textoDesencriptado = textoDesencriptado.replace(/imes/g,"i");
        var textoDesencriptado = textoDesencriptado.replace(/ai/g,"a");
        var textoDesencriptado = textoDesencriptado.replace(/ober/g,"o");
        var textoDesencriptado = textoDesencriptado.replace(/ufat/g,"u");
    
        document.querySelector("#msg").value = textoDesencriptado;
        document.querySelector("#input-texto").value = '';
               
      }
}
  

//Evita que la página se recargue
formulario.addEventListener("click",function(event){
event.preventDefault();});

btnEncriptar.addEventListener("click",encriptar);

btnCopiar.addEventListener("click",copiar)
btnDesencriptar.addEventListener("click",desencriptar)





