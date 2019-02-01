//llamar programa de cifrado y descifrado.
const start=()=>{
        document.getElementById("program").style.display= 'block';
        document.getElementById("show").style.display='block';
        document.getElementById("playAgain").style.display='block';
        document.getElementById("startScreen").style.display= 'none';
} 
 
const cifrar=()=>{
	x = cipher.encode(parseInt(document.getElementById("moves").value), document.getElementById("message").value);
	document.getElementById('result').innerHTML=x;
}

 const descifrar=()=>{
	y= cipher.decode(parseInt(document.getElementById("moves").value), document.getElementById("message").value);
	document.getElementById('result').innerHTML=y;
	}

//función para nuevo mensaje
const newMessage=()=>{
    message.value=" ";
    result.value=" ";
    moves.value=" ";
}

//función despedida
const byeMessage=()=>{
    document.getElementById("comeBackSoon").style.display='block';
    document.getElementById("program").style.display= 'none';
    document.getElementById("show").style.display='none';
    document.getElementById("playAgain").style.display='none';
    
}

document.getElementById("start").addEventListener("click", start);
document.getElementById("cifrar").addEventListener("click", cifrar);
document.getElementById("descifrar").addEventListener("click", descifrar);
document.getElementById("newMessage").addEventListener("click", newMessage);
document.getElementById("byeMessage").addEventListener("click", byeMessage);


