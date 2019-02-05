//función para cifrar/encriptar
const encode=(offset, string)=>{
  const strCifrado= []; //arreglo para frase cifrada

  for (var i=0; i<string.length; i++){ //contador para cifrar
    let letra= string.charCodeAt(i); //cada letra de la frase en ASCII
    let letraCifrada = (letra - 65 + offset)%26 + 65; //cifra de cada letra del string en ASCII

    strCifrado.push(String.fromCharCode(letraCifrada));
  }

  const output = strCifrado.join ('');
  return output;
};

//termina funcion cifrado/encriptado

const decode=(offset, string)=>{
  const strDescifrado= []; //arreglo para frase descifrada

  for (var i=0; i<string.length; i++){ //contador para descifrar
    let letra= string.charCodeAt(i); //cada letra en código ASCII
    let letraDescifrada = (letra + 65 - offset)%26 + 65; // descifra cada letra del string en ASCII

    strDescifrado.push(String.fromCharCode(letraDescifrada));
  }
  const output= strDescifrado.join ('');
  return output;
};
window.cipher = {
  encode: encode,
  decode: decode,
};
