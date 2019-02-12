//función para cifrar/encriptar
const encode=(offset, string)=>{
  const strCipher= []; //arreglo para frase cifrada
  let charCipher;

  for (let i=0; i<string.length; i++){ //contador para cifrar
    let char= string.charCodeAt(i); //cada letra de la frase en ASCII
    

    if (char>=65 && char<=90){ //fórmula para mayúsculas
     charCipher = (char - 65 + offset)%26 + 65; //cifra de cada letra del string en ASCII
     strCipher.push(String.fromCharCode(charCipher));
     console.log(strCipher.push);
    }
    else if (char>=97 && char <=122) { //fórmula para minúsculas
        charCipher= (char - 97 + offset)%26 + 97;
        strCipher.push(String.fromCharCode(charCipher));
      }
    else{
      strCipher.push(String.fromCharCode(charCipher));
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
    

    if (char>=65 && char<=90){ //fórmula para mayúsculas
     charDescipher = (char + 65 - offset)%26 + 65; //cifra de cada letra del string en ASCII
     strDescipher.push(String.fromCharCode(charDescipher));
     
    }
    else if (char>=97 && char <=122) { //fórmula para minúsculas
        charDescipher= (char + 59 - offset)%26 + 97;
        strDescipher.push(String.fromCharCode(charDescipher));
      }
    else  {
      return strDescipher.push(String.fromCharCode(charDescipher));
    }
   }
    return strDescipher.join ('');

};

window.cipher = {
  encode: encode,
  decode: decode,
};
