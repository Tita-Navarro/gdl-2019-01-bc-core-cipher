//llamar programa de cifrado y descifrado.
const start=()=>{
        document.getElementById("program").style.display= 'block';
        document.getElementById("show").style.display='block';
        document.getElementById("playAgain").style.display='block';
        document.getElementById("startScreen").style.display= 'none';
};
document.getElementById("start").addEventListener("click", start);
 //función para llamar el cifrado
const buttcipher=()=>{
	let cipherbtt=cipher.encode(parseInt(document.getElementById("moves").value), document.getElementById("message").value);
    document.getElementById('result').innerHTML=cipherbtt;
    return cipherbtt;
};
document.getElementById("buttcipher").addEventListener("click", buttcipher);

 const buttdescipher=()=>{
	let decipherbtt= cipher.decode(parseInt(document.getElementById("moves").value), document.getElementById("message").value);
    document.getElementById('result').innerHTML=decipherbtt;
    return decipherbtt;
	};
    document.getElementById("buttdescipher").addEventListener("click", buttdescipher);

//función para nuevo mensaje
const newMessage=()=>{
    document.getElementById("moves").value="";
    document.getElementById("message").value="";
    document.getElementById("result").textContent="";
};
document.getElementById("newMessage").addEventListener("click", newMessage);

//función despedida
const byeMessage=()=>{
    document.getElementById("comeBackSoon").style.display='block';
    document.getElementById("program").style.display= 'none';
    document.getElementById("show").style.display='none';
    document.getElementById("playAgain").style.display='none';
 
};

document.getElementById("byeMessage").addEventListener("click", byeMessage);


