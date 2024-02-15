const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copiar= document.getElementById(".copiar");

/*const btn_encriptar= document.getElementById(".btn_encriptar");
const btn_desencriptar= document.getElementById(".btn_desencriptar");
const copiar= document.getElementById(".copiar");*/

function btnEncriptar(){
  const textoEncriptado = encriptar (textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value ="";
  mensaje.style.backgroundImage= "none";
}

function encriptar (stringEncriptado){
  let matrizCodigo =[("e", "enter"), ("i", "imes"),("o", "ober"),("a", "ai"),("u", "ufat") ];
  stringEncriptado = stringEncriptado.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptado.includes(matrizCodigo[i][0])){
      stringEncriptado =stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i])
    }
  }
  return stringEncriptado
}

function btnDesencriptar(){
  const textoEncriptado = desencriptar (textArea.value)
  mensaje.value = textoEncriptado
  textArea.value ="";
  
}

function desencriptar (stringDesencriptado){
  let matrizCodigo = [("e", "enter"), ("i", "imes"),("o", "ober"),("a", "ai"),("u", "ufat") ];
  stringDesencriptado = stringDesencriptado.toLowerCase();
  for(let i=0; i <matrizCodigo.length; i++){
    if(stringDesencriptado.includes(matrizCodigo[i][1])){
      stringDesencriptado =stringDesencriptado.replaceAll(matrizCodigo[i], matrizCodigo[i][0])
    }
  }
  return stringDesencriptado
}


function copy(){
  let text= document.getElementById(".mensaje");
 mensaje.select();
 mensaje.setSelectionRange(0, 9999999);
 document.execCommand('copy')
}
 
    btnEncriptar.onclick = encriptar;
    btnDesencriptar.onclick = desencriptar;
    