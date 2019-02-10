//función para cifrar/encriptar
const encode=(offset, string)=>{
  const strCipher= []; //arreglo para frase cifrada

  for (var i=0; i<string.length; i++){ //contador para cifrar
    let char= string.charCodeAt(i); //cada letra de la frase en ASCII
    let charCipher = (char - 65 + offset)%26 + 65; //cifra de cada letra del string en ASCII

    strCifrado.push(String.fromCharCode(charCipher));
  }

  const output = strCipher.join ('');
  return output;
};

//termina funcion cifrado/encriptado

const decode=(offset, string)=>{
  const strDescipher= []; //arreglo para frase descifrada

  for (var i=0; i<string.length; i++){ //contador para descifrar
    let char= string.charCodeAt(i); //cada letra en código ASCII
    let charDescipher = (char + 65 - offset)%26 + 65; // descifra cada letra del string en ASCII

    strDescipher.push(String.fromCharCode(charDescipher));
  }
  const output= strDescipher.join ('');
  return output;
};
window.cipher = {
  encode: encode,
  decode: decode,
};
