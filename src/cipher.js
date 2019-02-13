//función para cifrar/encriptar
const encode=(offset, string)=>{
  const strCipher= []; //arreglo para frase cifrada
  let charCipher;

  for (let i=0; i<string.length; i++){ //contador para cifrar
    let char= string.charCodeAt(i); //cada letra de la frase en ASCII
    
    if(char>=32 && char<=64){
      charCipher=(char -32 + offset)%33+32;
      strCipher.push(String.fromCharCode(charCipher));
    }

    else if (char>=65 && char<=90){ //fórmula para mayúsculas
     charCipher = (char - 65 + offset)%26 + 65; //cifra de cada letra del string en ASCII
     strCipher.push(String.fromCharCode(charCipher));
     console.log(strCipher.push);
    }
    
    else if (char>=97 && char <=122) { //fórmula para minúsculas
        charCipher= (char - 97 + offset)%26 + 97;
        strCipher.push(String.fromCharCode(charCipher));
      }
      else{
        alert('No es un carácter válido');
      }

    }
    return strCipher.join ('');

};

//termina funcion cifrado/encriptado

const decode=(offset, string)=>{
  const strDescipher= []; //arreglo para frase descifrada
  let charDescipher;

  for (let i=0; i<string.length; i++){ //contador para cifrar
    let char= string.charCodeAt(i); //cada letra de la frase en ASCII
    
    if (char<=32 && char>=64){
      charDescipher= (char+34-offset)%33+32;
      strDescipher.push(String.fromCharCode(charDescipher));
    }

    else if (char>=65 && char<=90){ //fórmula para mayúsculas
     charDescipher = (char + 65 - offset)%26 + 65; //cifra de cada letra del string en ASCII
     strDescipher.push(String.fromCharCode(charDescipher));
     
    }
    else if (char>=97 && char <=122) { //fórmula para minúsculas
        charDescipher= (char + 59 - offset)%26 + 97;
        strDescipher.push(String.fromCharCode(charDescipher));
      }
    else   {
      alert('Es un carácter no válido');
    }
  }
    return strDescipher.join ('');

};

window.cipher = {
  encode: encode,
  decode: decode,
};
