//llamar programa de cifrado y descifrado.
function start() {
        document.getElementById("program").style.display= 'block';
        document.getElementById("show").style.display='block';
        document.getElementById("playAgain").style.display='block';
        document.getElementById("startScreen").style.display= 'none';
    } 
//Función para cifrado
let offsetCipher = parseInt(document.getElementById("moves").value); //offset que introduce el usuario, convertida a número (esto es necesario para que la fórmula funcione!!)
let strCipher = document.getElementById("message").value; //string que introduce el usuario para cifrar
let strCiphered = []; //array donde se almacenará el texto cifrado con el método push

function encode(string,offset) {
	
	for (var i = 0; i < string.length; i++) { //contador para obtener cada letra del string
		let character = string.charCodeAt(i); // cada letra del string en código ASCII
		//console.log(character);
		let characterCiphered = (character - 65 + offsetCipher) % 26 + 65; //cifra cada letra del string usando el offset dado por el usuario y devuelve su código ASCII
		//console.log(characterCiphered);
		strCiphered.push(String.fromCharCode(characterCiphered)); //array del texto cifrado en ASCII
		let outputEn= strCiphered.join(''); //une el array para que se vea como un texto 
		//console.log(output); //imprime el resultado en la consola, para poderlo enviar al html
		document.getElementById('result').innerHTML = outputEn; //envía el resultado al p element result
		
	}
}
//termina mi funcion de cifrado

//inicia función de descifrado

let strDecipher = document.getElementById('message').value; //string que introduce el usuario.
let strDeciphered = []; //array donde se almacenará el texto cifrado con el método push

function decode(string, offset){
    
    for (var i = 0; i < string.length; i++) { //contador para obtener cada letra
		let characterDe = string.charCodeAt(i); // cada letra del string en ASCII
			//console.log(characterDe); // caracter que se va a descifrar en ASCII
		let characterDeciphered = (characterDe + 65 - offsetDecipher) % 26 + 65; //cifra cada letra del string usando el offset dado por el usuario y devuelve su código ASCII
			//console.log(characterDeciphered); // log del caracter descifrado
		strDeciphered.push(String.fromCharCode(characterDeciphered)); //array del texto cifrado en código ASCII
		let outputDe= strDeciphered.join(''); //une el array para que se vea como un texto 
			//console.log(outputDe); //imprime el resultado en la consola, para enviarlo al html
		document.getElementById('result').innerHTML = outputDe; //envía el resultado al p element result
		
	}
}
//termina la función de descifrado

//función para nuevo mensaje
function newMessage (){
    message.value=" ";
    result.value=" ";
    moves.value=" ";
}

//función despedida
function byeMessage (){
    document.getElementById("comeBackSoon").style.display='block';
    document.getElementById("program").style.display= 'none';
    document.getElementById("show").style.display='none';
    document.getElementById("playAgain").style.display='none';
    
}


