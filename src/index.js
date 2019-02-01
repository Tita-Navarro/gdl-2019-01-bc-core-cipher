//llamar programa de cifrado y descifrado.
const start=()=>{
        document.getElementById("program").style.display= 'block';
        document.getElementById("show").style.display='block';
        document.getElementById("playAgain").style.display='block';
        document.getElementById("startScreen").style.display= 'none';
}
document.getElementById("start").addEventListener("click", start);
 
const cifrar=()=>{
	let x=cipher.encode(parseInt(document.getElementById("moves").value), document.getElementById("message").value);
    document.getElementById('result').innerHTML=x;
    return x;
}
document.getElementById("cifrar").addEventListener("click", cifrar);

 const descifrar=()=>{
	let y= cipher.decode(parseInt(document.getElementById("moves").value), document.getElementById("message").value);
    document.getElementById('result').innerHTML=y;
    return y;
	}
    document.getElementById("descifrar").addEventListener("click", descifrar);

//función para nuevo mensaje
const newMessage=()=>{
    message.value="";
    result.value="";
    moves.value="";
}
document.getElementById("newMessage").addEventListener("click", newMessage);

//función despedida
const byeMessage=()=>{
    document.getElementById("comeBackSoon").style.display='block';
    document.getElementById("program").style.display= 'none';
    document.getElementById("show").style.display='none';
    document.getElementById("playAgain").style.display='none';
 
}


document.getElementById("byeMessage").addEventListener("click", byeMessage);


